import { HttpException, Injectable } from "@nestjs/common"
import { SupabaseService } from "src/lib/supabase/supabase.service";
import { CustomerService } from "../customers/customer.service";
import { authDto, userDto } from "./auth.dto";

@Injectable()
export class AuthService {
    constructor(
        private readonly supabaseService: SupabaseService,
        private readonly customersService: CustomerService,
    ) {}

    async signUp(email: string, password: string, name: string): Promise<userDto> {
        const supabaseUser = await this.supabaseService.signUp(email, password);

        const customer = await this.customersService.save({
            name,
            supabaseId: supabaseUser.id,
        });


        return {
            id: customer.id!,
            name: customer.name,
            email: supabaseUser.email!,
            supabaseId: supabaseUser.id,
        }
    }

    async signIn(email: string, password: string): Promise<authDto> {
        try {
            const supabaseData = await this.supabaseService.signIn(email, password);

            const customer = await this.customersService.findBySupabaseId(supabaseData.user.id);

            return {
                acessToken: supabaseData.session.access_token,
                user: {
                    id: customer?.id!,
                    name: customer?.name!,
                    email: supabaseData.user.email!,
                    supabaseId: supabaseData.user.id,
                }
            }

        } catch (error) {
            throw new HttpException('Invalid credentials', 401);
        }
    }
}

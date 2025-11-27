import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, ParseUUIDPipe, Post, Put } from "@nestjs/common"
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(
        private readonly service: AuthService,
    ) {}

    @Post('signup')
    @HttpCode(HttpStatus.CREATED)
    async signUp(
        @Body('email') email: string,
        @Body('password') password: string,
        @Body('name') name: string,
    ) {
        return this.service.signUp(email, password, name);
    }

    @Post('signin')
    @HttpCode(HttpStatus.OK)
    async signIn(
        @Body('email') email: string,
        @Body('password') password: string,
    ) {
        return this.service.signIn(email, password);
    }
}
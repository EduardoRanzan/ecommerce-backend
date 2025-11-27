export interface CredentialsDto {
  email: string;
  password: string;
}

export interface authDto {
  acessToken: string;
  user: userDto;
}

export interface userDto {
  id: string;
  name: string;
  email: string;
  supabaseId: string;
}
/*No backend contém apenas dois atributos: usuario e senha. 
Entretanto, ao efetuar login na API, o objeto retornado pelo 
Backend inclui todos os dados do usuário, além do Token JWT.*/

export default interface UsuarioLogin {
  id: number;
  nome: string;
  usuario: string;
  senha: string;
  foto: string; 
  token: string;
}
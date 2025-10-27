import type Tema from "./Tema";
import type Usuario from "./Usuario";

export default interface Postagem {
  id: number;
  titulo: string;
  texto: string;
  data: string; //Não terá nenhuma manipulação com datas, apenas será exibido o valor recebido.
  tema: Tema | null; // Relacionamento  entre Postagem e Tema
  usuario: Usuario | null; // Relacionamento entre Postagem e Usuario
}
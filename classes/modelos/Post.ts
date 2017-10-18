import {Autor} from "./Autor";
import {Comentario} from "./Comentario";
import {MongoDB} from "../persistencia/MongoDB";

export class Post {

    /**
     * TODO gerar ID
     */

    public titulo: string;
    public conteudo: string;
    public tags: Array<string>;
    public autores: Array<Autor>;
    public comentarios: Array<Comentario>;

    constructor(
        titulo: string,
        conteudo: string
    ){
        this.titulo = titulo;
        this.conteudo = conteudo;
    }

    addTag(tag: string) : void {
        this.tags.push(tag);
    }

    removeTag(tag: string) : void {
        this.tags = this.tags.filter(elemento =>{
            return elemento !== tag;
        })
    }

    addAutor( autor: Autor) : void{
        this.autores.push(autor);
    }

    removeAutor(autor: Autor) : void {
        this.autores = this.autores.filter(elemento =>{
            return elemento.nome !== autor.nome;
        });
    }

    addComentario(comentario: Comentario) : void{
        this.comentarios.push(comentario);
    }

    removeComentario(comentario: Comentario) : void{
        this.comentarios = this.comentarios.filter(elemento =>{
            return elemento.autor.nome !== comentario.autor.nome
        });
    }

    persistirMongodb(callback? : ()=> void){
        const mongodb = new MongoDB('posts');
        const objeto = this;
        mongodb.persistirObjeto(this, (erro, resultado)=>{
            console.log('persistido');
            callback();
        });
    }

    public convertToJSON(){
        return JSON.stringify(this);
    }

}



import {Autor} from "./Autor";

export class Comentario{

    /**
     * TODO gerar ID
     */

    public comentario: string;
    public data : Date;
    public autor: Autor;

    constructor(comentario: string, autor: Autor){
        this.data = new Date();
        this.comentario = comentario;
        this.autor = autor;
    };


    /**
     * TODO funcao persistir em um POST
     */

}
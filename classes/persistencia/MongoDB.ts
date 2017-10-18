/**
 * Created by mathias on 02/10/17.
 */

import {Post} from '../modelos/Post';

declare function require(nome: string);

const mongodb = require('mongodb').MongoClient;

export class MongoDB{

    private comum: string = 'mongodb';
    private servidor: string = 'localhost';
    private port: number = 27017;
    private banco: string = 'Post';
    private url: string;
    private usuario: string;
    private senha: string;
    private collection: string;

    constructor(collection:string,
                usuario?:string,
                senha?:string
    ){
        this.collection = collection ? collection : this.collection;
        if(usuario || senha){
            this.senha = senha;
            this.usuario = usuario;
            this.url = `${this.comum}://${this.usuario}:${this.senha}@${this.servidor}:${this.port}/${this.banco}`;
        } else {
            this.url = `${this.comum}://${this.servidor}:${this.port}/${this.banco}`;
        }
    }

    persistirObjeto(objeto: Post, callback? : (erro: any, resultado: any)=> void){
        const valor = JSON.stringify(objeto);
        mongodb.connect(this.url, (erro, db)=>{
            db.collection(this.collection).insertOne(objeto, (erro, resultado)=>{
                callback(erro, resultado);
            })
        });
    }

    get getUrl(): string {
        return this.url;
    }

}
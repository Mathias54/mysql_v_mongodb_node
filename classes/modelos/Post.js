"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MongoDB_1 = require("../persistencia/MongoDB");
var Post = (function () {
    function Post(titulo, conteudo) {
        this.titulo = titulo;
        this.conteudo = conteudo;
    }
    Post.prototype.addTag = function (tag) {
        this.tags.push(tag);
    };
    Post.prototype.removeTag = function (tag) {
        this.tags = this.tags.filter(function (elemento) {
            return elemento !== tag;
        });
    };
    Post.prototype.addAutor = function (autor) {
        this.autores.push(autor);
    };
    Post.prototype.removeAutor = function (autor) {
        this.autores = this.autores.filter(function (elemento) {
            return elemento.nome !== autor.nome;
        });
    };
    Post.prototype.addComentario = function (comentario) {
        this.comentarios.push(comentario);
    };
    Post.prototype.removeComentario = function (comentario) {
        this.comentarios = this.comentarios.filter(function (elemento) {
            return elemento.autor.nome !== comentario.autor.nome;
        });
    };
    Post.prototype.persistirMongodb = function (callback) {
        var mongodb = new MongoDB_1.MongoDB('posts');
        var objeto = this;
        mongodb.persistirObjeto(this, function (erro, resultado) {
            console.log('persistido');
            callback();
        });
    };
    Post.prototype.convertToJSON = function () {
        return JSON.stringify(this);
    };
    return Post;
}());
exports.Post = Post;

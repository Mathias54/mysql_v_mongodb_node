/**
 * Created by mathias on 02/10/17.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb = require('mongodb').MongoClient;
var MongoDB = (function () {
    function MongoDB(collection, usuario, senha) {
        this.comum = 'mongodb';
        this.servidor = 'localhost';
        this.port = 27017;
        this.banco = 'Post';
        this.collection = collection ? collection : this.collection;
        if (usuario || senha) {
            this.senha = senha;
            this.usuario = usuario;
            this.url = this.comum + "://" + this.usuario + ":" + this.senha + "@" + this.servidor + ":" + this.port + "/" + this.banco;
        }
        else {
            this.url = this.comum + "://" + this.servidor + ":" + this.port + "/" + this.banco;
        }
    }
    MongoDB.prototype.persistirObjeto = function (objeto, callback) {
        var _this = this;
        var valor = JSON.stringify(objeto);
        mongodb.connect(this.url, function (erro, db) {
            db.collection(_this.collection).insertOne(objeto, function (erro, resultado) {
                callback(erro, resultado);
            });
        });
    };
    Object.defineProperty(MongoDB.prototype, "getUrl", {
        get: function () {
            return this.url;
        },
        enumerable: true,
        configurable: true
    });
    return MongoDB;
}());
exports.MongoDB = MongoDB;

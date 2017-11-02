
/// <reference path="../Service/InjectorComponents.ts" />
/// <reference path="../Reflection/Reflection.ts" />
/// <reference path="../Service/Container.ts" />
/// <reference path="../Mvc/Model/StaticModel.ts" />
/// <reference path="../Mvc/Model/AjaxModel.ts" />
/// <reference path="../Network/Ajax.ts" />
/// <reference path="./UnitOfWork.ts" />
/// <reference path="./Hydrator.ts" />
/// <reference path="./Filter.ts" />

namespace Northwind.Persistence
{
    export class EntityManager extends Service.InjectorComponents implements EntityManagerInterface
    {
        uow                : Northwind.Persistence.UnitOfWork;
        private ajax       : Northwind.Network.Ajax         = null;
        private hydrator   : Northwind.Persistence.Hydrator = null;
        private source     : string;
        private model      : Object;
        private fnResponse : Function;
        private resultSet  : any;

        /**
         * Entity manager is a class
         */
        public constructor()
        {
            super();
            this.uow = new Northwind.Persistence.UnitOfWork;
        }

        /**
         * 
         * @param model 
         * @param params 
         */
        public find(model : any, params : Object = {})
        {
            this.setWhenIsModel(
                model,
                params,
                "find"
            );
            return this;
        }

        /**
         * 
         * @param model 
         * @param params 
         */
        public findOne(model : any, params : Object = {})
        {
            this.setWhenIsModel(
                model,
                params,
                "findOne"
            );
            return this;
        }

        /**
         * 
         * @param model 
         * @param params 
         */
        public count(model : any, params : Object = {})
        {
            this.setWhenIsModel(
                model,
                params,
                "count"
            );
            return this;
        }

        /**
         *
         */
        public setWhenIsModel(model, params, type)
        {
            let objModel = new model();

            this.getContainer()
                .set("transactionModel", model);

            this.getContainer()
                .set("transactionObjModel", objModel);

            this.getContainer()
                .set("transactionParams", params);

            this.getContainer()
                .set(
                "transactionType",
                type
            );

            if (objModel instanceof Northwind.Mvc.RawModel) {
                var callAjax = false;
                
                if (objModel instanceof Northwind.Mvc.AjaxModelPersistent) {
                    if (objModel.getAjaxInit() === null) {
                        this.callAjax(objModel, type, params);
                    }
                } else if (objModel instanceof Northwind.Mvc.AjaxModel) {
                    this.callAjax(objModel, type, params);
                }
            } else {
                throw "Model must be instance of RawModel";
            }
        }

        private callAjax(objModel : any, type, params)
        {
            this.ajax = new Network.Ajax();
            this.ajax.setDi(this.getDi());
            var url = null;
            switch (type) {
                case "find":
                        url = objModel.getFindUrl();
                    break;
                case "findOne":
                        url = objModel.getFindOneUrl();
                    break;
                case "insert":
                        url = objModel.getInsertUrl();
                    break;
                case "update":
                        url = objModel.getUpdateUrl();
                    break;
                case "delete":
                        url = objModel.getDeleteUrl();
                    break;
                case "count":
                        url = objModel.getCountUrl();
                    break;
            }
            if (url == null) {
                url = this.getDi().get("url").get("baseUrl") +
                this.lcfirst(objModel.getClassName()) +
                this.ucfirst(type);
            }
            this.ajax.setUrl(
                url
            );
            this.ajax.setParams(
                params
            );
            this.ajax.setMethod(
                objModel.getMethod()
            );
        }

        /**
         *
         */
        private ucfirst(str)
        {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }

        /**
         *
         */
        private lcfirst(str)
        {
            return str.charAt(0).toLowerCase() + str.slice(1);
        }

        /**
         *
         */
        public save(model : any)
        {
            this.getContainer()
                .set(
                    "transactionModel",
                    model
                );

            this.getContainer()
                .set(
                    "transactionObjectModel",
                    model
                );

            this.getContainer()
                .set(
                    "transactionType",
                    "save"
                );

            if (model instanceof Northwind.Mvc.AjaxModel) {
                this.ajax = new Northwind.Network.Ajax();
                this.ajax.setDi(this.getDi());
                var modelName = model.getClassName();

                switch (model.state) {
                    case Northwind.Persistence.UnitOfWork.NEW:
                            var url = model.getInsertUrl();
                            if (url == null) {
                                url = this.getDi().get("url").get("baseUrl")+
                                modelName +
                                "Insert";
                            }
                            this.ajax.setUrl(
                                url
                            );
                        break;
                    case Northwind.Persistence.UnitOfWork.CREATED:
                            var url = model.getUpdateUrl();
                            if (url == null) {
                                url = this.getDi().get("url").get("baseUrl") +
                                this.lcfirst(modelName) +
                                "Update";
                            }
                            this.ajax.setUrl(
                                url
                            );
                        break;
                }

                var reflection = new Northwind.Reflection.Reflection();
                var attrsAsString = JSON.stringify(
                    reflection.getAtttributeAsObjects(model)
                );
                var objParams = {};
                objParams[modelName] = attrsAsString;
                this.ajax.setParams(objParams);
                this.ajax.setMethod(
                    model.getMethod()
                );

            } else if (model instanceof Northwind.Mvc.StaticModel) {
                switch (model.state) {
                    case Northwind.Persistence.UnitOfWork.NEW:
                            let tempData = model.getData();
                        break;
                    case Northwind.Persistence.UnitOfWork.CREATED:

                        break;
                }
            }

            return this;
        }

        /**
         *
         */
        public delete(model : any)
        {
            this.getContainer()
                .set(
                    "transactionModel",
                    model
                );

            this.getContainer()
                .set(
                    "transactionObjectModel",
                    model
                );

            this.getContainer()
                .set(
                    "transactionType",
                    "delete"
                );

            if (model instanceof Northwind.Mvc.AjaxModel) {
                this.ajax = new Network.Ajax();
                this.ajax.setDi(this.getDi());
                var modelName = model.getClassName();

                var url = model.getDeleteUrl();
                if (url == null) {
                    url = this.getDi().get("url").get("baseUrl") +
                    this.lcfirst(modelName) +
                    "Delete";
                }
                this.ajax.setUrl(
                    url
                );
                var reflection = new Northwind.Reflection.Reflection();
                var attrsAsString = JSON.stringify(
                    reflection.getAtttributeAsObjects(model)
                );
                var objParams = {};
                objParams[modelName] = attrsAsString;
                this.ajax.setParams(objParams);
                this.ajax.setMethod(
                    model.getMethod()
                );

            } else if (model instanceof Northwind.Mvc.StaticModel) {
                switch (model.state) {
                    case UnitOfWork.NEW:
                            let tempData = model.getData();
                        break;
                    case UnitOfWork.CREATED:

                        break;
                }
            }

            return this;
        }

        /**
         *
         */
        public response(fn : Function)
        {
            var model  = this.getContainer()
                .get("transactionModel");

            var objModel  = this.getContainer()
                .get("transactionObjModel");

            var type =  this.getContainer()
                .get("transactionType");

            if (type == "save" || type == "delete") {
                this.ajax.response(function (response) {
                    return fn(this.setResponse(
                        response,
                        objModel,
                        type,
                        model
                    ));

                }.bind(this));

                this.ajax.send();

            } else {

                if (type == "find" || type == "findOne" || type == "count") {
                    var params = this.getContainer()
                        .get("transactionParams");
                }

                this.checkModel(
                    fn,
                    type,
                    model,
                    objModel,
                    params
                );
            }

            return this;
        }

        /**
         *
         */
        public checkModel(fn, type, model, objModel, params)
        {
            if (objModel instanceof Northwind.Mvc.AjaxModelPersistent) {
                let data = objModel.getData();
                if (objModel.getAjaxInit() == null) {
                    this.setResponseAjax(
                        fn,
                        type,
                        model,
                        objModel,
                        params
                    );
                } else {
                    this.setResponseStatic(
                        fn,
                        objModel,
                        type,
                        model,
                        params
                    );
                }
            } else {
                if (objModel instanceof Northwind.Mvc.AjaxModel) {
                    this.setResponseAjax(
                        fn,
                        type,
                        model,
                        objModel,
                        params
                    );
                } else {
                    if (objModel instanceof Northwind.Mvc.StaticModel) {
                        this.setResponseStatic(
                            fn,
                            objModel,
                            type,
                            model,
                            params
                        );
                    }
                }
            }
        }

        /**
         *
         */
        private setResponseAjax(fn, type, model, objModel, params)
        {
            this.ajax.response(function (response) {
                return fn(this.setResponse(
                    response,
                    objModel,
                    type,
                    model,
                    params
                ));
            }.bind(this));
            this.ajax.send();
        }

        /**
         *
         */
        public setResponseStatic(fn, objModel, type, model, params)
        {
            fn(this.setResponse(
                objModel.getData(),
                objModel,
                type,
                model,
                params
            ));
        }

        /**
         *
         */
        private setResponse(data, objModel, type, model, params)
        {
            let resultSet : any = new Array();
            switch (type) {
                case "count":
                case "findOne":
                        resultSet = this.getResultSet(
                            data,
                            params,
                            model,
                            objModel
                        );
                        if (resultSet != false) {
                            resultSet = resultSet[0];
                        }
                    break;
                case "find":
                        resultSet = this.getResultSet(
                            data,
                            params,
                            model,
                            objModel
                        );
                    break;
                case "delete":
                case "save":
                        resultSet = data;
                    break;
            }
            return resultSet;
        }

        /**
         *
         */
        private getResultSet(response, params, model, objModel)
        {
            let resultSet : any = new Array();
            let hydrator = new Hydrator;

            let filters  = new Filter;
            filters.buildCondition(params);

            var data = new Array();
            if (objModel instanceof Northwind.Mvc.AjaxModelPersistent) {
                if (objModel.getAjaxInit() == null) {
                    objModel.setAjaxInit(true);
                    objModel.setData(response);
                }
                data = filters.getMultipleRowValues(
                    response,
                    false
                );
            } else if (objModel instanceof Northwind.Mvc.AjaxModel) {
                data = filters.getMultipleRowValues(
                    response,
                    false
                );
            } else {
                data = filters.getMultipleRowValues(
                    response
                );
            }

            var i = 0;
            for (let key in data) {

                let newModel = hydrator.hydrate(
                    model,
                    data[key]
                );

                if (newModel instanceof Northwind.Mvc.StaticModel) {
                    newModel.setIndex(i);
                }

                resultSet.push(
                    newModel
                );
                i++;
            }

            if (resultSet.length == 0) {
                resultSet = false;
            }

            return resultSet;
        }

        /**
         *
         */
        public flush()
        {
            return false;
        }

        /**
         *
         */
        public reset()
        {
            return false;
        }

        /**
         *
         */
        public group()
        {
            return {};
        }

        /**
         *
         */
        public distinct()
        {
            return {};
        }

        /**
         *
         */
        public purge()
        {
            return false;
        }

        /**
         *
         */
        public forget()
        {
            return false;
        }

        public checksum(obj)
        {
            var keys = Object.keys(obj).sort();
            var output = [], prop;
            for (var i = 0; i < keys.length; i++) {
                prop = keys[i];
                output.push(prop);
                output.push(obj[prop]);
            }
            return JSON.stringify(output);
        }
    }

    export interface EntityManagerInterface
    {
        uow : Object;

        find(conext,      model : Northwind.Mvc.RawModel, params : Object);
        findOne(context,  model : Northwind.Mvc.RawModel, params : Object);
        count(context,    model : Northwind.Mvc.RawModel, params : Object);
        save(context,     model : Northwind.Mvc.RawModel);
        delete(context,   model : Northwind.Mvc.RawModel);
        flush();
        reset();
    }
}

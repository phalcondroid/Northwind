///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>

namespace Northwind.Tag
{
    /**
     * [Table description]
     * @type {[type]}
     */
    export class Table extends Northwind.Html.Component
    {
        private tblElements;
        private thead;
        private tbody;
        private tfoot;
        private tr;
        private th;
        private td;
        private system;
        private header = false;
        private fnCHeader;
        private fnCContent;

        /**
         *
         */
        public constructor()
        {
            super();
            this.create("table");

            this.thead = new Northwind.Tag.Thead();
            this.tbody = new Northwind.Tag.Tbody();
            this.tfoot = new Northwind.Tag.Tfoot();

            this.setArgs(this.getArguments(arguments));
            this.initialize();
        }

        /**
         *
         */
        public getThead()
        {
            return this.thead;
        }

        /**
         *
         */
        public getTbody()
        {
            return this.tbody;
        }

        /**
         *
         */
        public toHead(component)
        {
            this.thead.append(
                component
            );
            this.append(
                this.thead
            );
            return this;
        }

        /**
         *
         */
        public toHeadTr(component)
        {
            let tr = new Northwind.Tag.Tr();
            tr.append(component);

            this.thead.append(
                tr
            );

            this.append(
                this.thead
            );

            return this;
        }

        /**
         *
         */
        public toBody(component)
        {
            this.tbody.append(
                component
            );

            this.append(
                this.tbody
            );

            return this;
        }

        /**
         *
         */
        public toFoot(component)
        {
            this.tfoot.append(
                component
            );

            this.append(
                this.tfoot
            );

            return this;
        }

        /**
         *
         */
        public toBodyTr(component)
        {
            let tr = new Northwind.Tag.Tr();
            tr.append(component);

            this.tbody.append(
                tr
            );

            this.append(
                this.tbody
            );

            return this;
        }

        /**
         *
         */
        public toFootTr(component)
        {
            let tr = new Northwind.Tag.Tr();
            tr.append(component);

            this.tfoot.append(
                tr
            );

            this.append(
                this.tfoot
            );

            return this;
        }

        /**
         *
         *
         */
        public setHeader(columns)
        {
            this.header = true;

            this.tr     = new Northwind.Tag.Tr();

            let i = 0;
            for (let key in columns) {

                let th = new Northwind.Tag.Th();

                if (typeof columns[key] == "object") {
                    th.append(
                        columns[key]
                    );
                } else {
                    th.append(
                        Helper.StringHelper.capitalize(columns[key])
                    );
                }

                this.tr.append(
                    th.getElement()
                );

                if (typeof this.fnCHeader === "function") {
                    this.fnCHeader(th, i, columns[key], key);
                }

                i++;
            }

            this.thead.append(
                this.tr.getElement()
            );

            this.append(
                this.thead.getElement()
            );

            return this;
        }

        /**
         * [setCustomize description]
         * @param  {Function} fn      [description]
         * @return {[type]}           [description]
         */
        public setHeaderCustomize(fn)
        {
            this.fnCHeader = fn;
            return this;
        }

        /**
         *
         * @param  {[type]} rows
         * @return {[type]}
         */
        public build(content)
        {

            this.system = ["click", "customize"];

            let html = new Northwind.Html.Component();
            let i = 0;

            for (let key in content) {

                let trIdentify = Helper.StringHelper.sanitizeString(key) + this.id;
                let tr = new Northwind.Tag.Tr();

                var header = new Array();
                let j = 0;

                for (let row in content[key]) {

                    header[j] = row;
                    let trIdentify2 = Helper.StringHelper.sanitizeString(key) + Helper.StringHelper.sanitizeString(row) + this.id;
                    let td = new Northwind.Tag.Td();

                    if (!this.validateSystemKeys(row)) {

                        let contentRow = content[key][row];
                        let finalContent;

                        if (contentRow instanceof Northwind.Html.Component) {
                            finalContent = contentRow.getElement();
                        } else if(typeof contentRow == "object" && contentRow != null) {

                            if (contentRow.hasOwnProperty("content")) {
                                finalContent = contentRow.content
                            }

                            if (contentRow.hasOwnProperty("class")) {
                                td.attr(
                                    contentRow.class
                                )
                            }

                            if (contentRow.hasOwnProperty("attr")) {
                                td.attr(
                                    contentRow.attr
                                )
                            }

                            if (contentRow.hasOwnProperty("css")) {
                                td.attr(
                                    contentRow.css
                                )
                            }

                            if (contentRow.hasOwnProperty("addTd")) {
                                tr.append([
                                    contentRow.addTd
                                ]);
                            }

                            if (contentRow.hasOwnProperty("event")) {
                                var functionTd = contentRow.event;
                                functionTd(td);
                            }

                        } else {
                            finalContent = contentRow;
                        }

                        td.append([
                            finalContent
                        ]);

                        tr.append(
                            td
                        );
                    }

                    if (typeof this.fnCContent === "function") {
                        this.fnCContent(td, j, content[key][row], row);
                        if (this.header === false) {
                            this.fnCHeader = this.fnCContent;
                        }
                    }

                    j++;
                }

                this.tbody.append(
                    tr
                );

                i++;
            }

            if (this.header === false) {
                this.setHeader(header);
            }

            this.append(
                this.tbody
            );

            return this;
        }

        /**
         * [setCustomize description]
         * @param  {Function} fn      [description]
         * @return {[type]}           [description]
         */
        public setContentCustomize(fn)
        {
            this.fnCContent = fn;
            return this;
        }

        /**
         *
         * @param  {[type]} row [description]
         * @return {[type]}     [description]
         */
        private validateSystemKeys(row)
        {
            if (Helper.ArrayHelper.inArray(this.system, row)) {
                return true;
            }
            return false;
        }
    }
}

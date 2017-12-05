
///<reference path="../ViewElements/A.ts"/>
///<reference path="../ViewElements/Abbr.ts"/>
///<reference path="../ViewElements/Address.ts"/>
///<reference path="../ViewElements/Area.ts"/>
///<reference path="../ViewElements/Article.ts"/>
///<reference path="../ViewElements/Aside.ts"/>
///<reference path="../ViewElements/Audio.ts"/>
///<reference path="../ViewElements/B.ts"/>
///<reference path="../ViewElements/Base.ts"/>
///<reference path="../ViewElements/Bdi.ts"/>
///<reference path="../ViewElements/Bdo.ts"/>
///<reference path="../ViewElements/Blockquote.ts"/>
///<reference path="../ViewElements/Body.ts"/>
///<reference path="../ViewElements/Br.ts"/>
///<reference path="../ViewElements/Button.ts"/>
///<reference path="../ViewElements/Canvas.ts"/>
///<reference path="../ViewElements/Caption.ts"/>
///<reference path="../ViewElements/Cite.ts"/>
///<reference path="../ViewElements/Code.ts"/>
///<reference path="../ViewElements/Col.ts"/>
///<reference path="../ViewElements/ColGroup.ts"/>
///<reference path="../ViewElements/Datalist.ts"/>
///<reference path="../ViewElements/Db.ts"/>
///<reference path="../ViewElements/Del.ts"/>
///<reference path="../ViewElements/Details.ts"/>
///<reference path="../ViewElements/Dfn.ts"/>
///<reference path="../ViewElements/Dialog.ts"/>
///<reference path="../ViewElements/Div.ts"/>
///<reference path="../ViewElements/Dl.ts"/>
///<reference path="../ViewElements/Dt.ts"/>
///<reference path="../ViewElements/Em.ts"/>
///<reference path="../ViewElements/Embed.ts"/>
///<reference path="../ViewElements/Fieldset.ts"/>
///<reference path="../ViewElements/Figcaption.ts"/>
///<reference path="../ViewElements/Figure.ts"/>
///<reference path="../ViewElements/Footer.ts"/>
///<reference path="../ViewElements/Form.ts"/>
///<reference path="../ViewElements/H1.ts"/>
///<reference path="../ViewElements/H2.ts"/>
///<reference path="../ViewElements/H3.ts"/>
///<reference path="../ViewElements/H4.ts"/>
///<reference path="../ViewElements/H5.ts"/>
///<reference path="../ViewElements/H6.ts"/>
///<reference path="../ViewElements/Head.ts"/>
///<reference path="../ViewElements/Header.ts"/>
///<reference path="../ViewElements/I.ts"/>
///<reference path="../ViewElements/Iframe.ts"/>
///<reference path="../ViewElements/Img.ts"/>
///<reference path="../ViewElements/Input.ts"/>
///<reference path="../ViewElements/Ins.ts"/>
///<reference path="../ViewElements/Kbd.ts"/>
///<reference path="../ViewElements/Keygen.ts"/>
///<reference path="../ViewElements/Label.ts"/>
///<reference path="../ViewElements/Leyend.ts"/>
///<reference path="../ViewElements/Li.ts"/>
///<reference path="../ViewElements/Link.ts"/>
///<reference path="../ViewElements/Main.ts"/>
///<reference path="../ViewElements/Map.ts"/>
///<reference path="../ViewElements/Menu.ts"/>
///<reference path="../ViewElements/MenuItem.ts"/>
///<reference path="../ViewElements/Meta.ts"/>
///<reference path="../ViewElements/Meter.ts"/>
///<reference path="../ViewElements/Nav.ts"/>
///<reference path="../ViewElements/Noscrip.ts"/>
///<reference path="../ViewElements/Obj.ts"/>
///<reference path="../ViewElements/Ol.ts"/>
///<reference path="../ViewElements/Optgroup.ts"/>
///<reference path="../ViewElements/Option.ts"/>
///<reference path="../ViewElements/Output.ts"/>
///<reference path="../ViewElements/P.ts"/>
///<reference path="../ViewElements/Param.ts"/>
///<reference path="../ViewElements/Pre.ts"/>
///<reference path="../ViewElements/Progress.ts"/>
///<reference path="../ViewElements/Q.ts"/>
///<reference path="../ViewElements/Rp.ts"/>
///<reference path="../ViewElements/Rt.ts"/>
///<reference path="../ViewElements/Ruby.ts"/>
///<reference path="../ViewElements/S.ts"/>
///<reference path="../ViewElements/Samp.ts"/>
///<reference path="../ViewElements/Script.ts"/>
///<reference path="../ViewElements/Section.ts"/>
///<reference path="../ViewElements/Select.ts"/>
///<reference path="../ViewElements/Small.ts"/>
///<reference path="../ViewElements/Source.ts"/>
///<reference path="../ViewElements/Span.ts"/>
///<reference path="../ViewElements/Strong.ts"/>
///<reference path="../ViewElements/Style.ts"/>
///<reference path="../ViewElements/Sub.ts"/>
///<reference path="../ViewElements/Table.ts"/>
///<reference path="../ViewElements/Tbody.ts"/>
///<reference path="../ViewElements/Td.ts"/>
///<reference path="../ViewElements/Textarea.ts"/>
///<reference path="../ViewElements/Tfoot.ts"/>
///<reference path="../ViewElements/Th.ts"/>
///<reference path="../ViewElements/Thead.ts"/>
///<reference path="../ViewElements/Time.ts"/>
///<reference path="../ViewElements/Title.ts"/>
///<reference path="../ViewElements/Tr.ts"/>
///<reference path="../ViewElements/Track.ts"/>
///<reference path="../ViewElements/U.ts"/>
///<reference path="../ViewElements/Ul.ts"/>
///<reference path="../ViewElements/Var.ts"/>
///<reference path="../ViewElements/Video.ts"/>
///<reference path="../ViewElements/Wbr.ts"/>

namespace Northwind.Tag
{
    export class FactoryTag
    {
        public di;

        /**
         *
         */
        private context;

        /**
         *
         */
        public constructor(ctx)
        {
            this.context = ctx;
        }

        /**
         *
         */
        public get(tagName)
        {
            let instance;
            switch (tagName.toUpperCase()) {
                case "A":
                        instance = new Northwind.Tag.A();;
                    break;
                case "ABBR":
                        instance = new Northwind.Tag.Abbr();;
                    break;
                case "ADDRESS":
                        instance = new Northwind.Tag.Address();;
                    break;
                case "AREA":
                        instance = new Northwind.Tag.Area();;
                    break;
                case "ARTICLE":
                        instance = new Northwind.Tag.Article();;
                    break;
                case "ASIDE":
                        instance = new Northwind.Tag.Aside();;
                    break;
                case "AUDIO":
                        instance = new Northwind.Tag.Audio();;
                    break;
                case "B":
                        instance = new Northwind.Tag.B();;
                    break;
                case "BASE":
                        instance = new Northwind.Tag.Base();;
                    break;
                case "BDI":
                        instance = new Northwind.Tag.Bdi();;
                    break;
                case "BDO":
                        instance = new Northwind.Tag.Bdo();;
                    break;
                case "BLOCKQUOTE":
                        instance = new Northwind.Tag.Blockquote();;
                    break;
                case "BODY":
                        instance = new Northwind.Tag.Body();;
                    break;
                case "BR":
                        instance = new Northwind.Tag.Br();;
                    break;
                case "BUTTON":
                        instance = new Northwind.Tag.Button();;
                    break;
                case "CANVAS":
                        instance = new Northwind.Tag.Canvas();;
                    break;
                case "CAPTION":
                        instance = new Northwind.Tag.Caption();;
                    break;
                case "CITE":
                        instance = new Northwind.Tag.Cite();;
                    break;
                case "CODE":
                        instance = new Northwind.Tag.Code();;
                    break;
                case "COL":
                        instance = new Northwind.Tag.Col();;
                    break;
                case "COLGROUP":
                        instance = new Northwind.Tag.ColGroup();;
                    break;
                case "DATALIST":
                        instance = new Northwind.Tag.Datalist();;
                    break;
                case "DB":
                        instance = new Northwind.Tag.Db();;
                    break;
                case "DEL":
                        instance = new Northwind.Tag.Del();;
                    break;
                case "DETAILS":
                        instance = new Northwind.Tag.Details();
                    break;
                case "DFN":
                        instance = new Northwind.Tag.Dfn();;
                    break;
                case "DIALOG":
                        instance = new Northwind.Tag.Dialog();;
                    break;
                case "DIV":
                        instance = new Northwind.Tag.Div();;
                    break;
                case "DL":
                        instance = new Northwind.Tag.Dl();;
                    break;
                case "DT":
                        instance = new Northwind.Tag.Dt();;
                    break;
                case "EM":
                        instance = new Northwind.Tag.Em();;
                    break;
                case "EMBED":
                        instance = new Northwind.Tag.Embed();;
                    break;
                case "FIELDSET":
                        instance = new Northwind.Tag.Fieldset();;
                    break;
                case "FIGCAPTION":
                        instance = new Northwind.Tag.Figcaption();;
                    break;
                case "FIGURE":
                        instance = new Northwind.Tag.Figure();;
                    break;
                case "FOOTER":
                        instance = new Northwind.Tag.Footer();;
                    break;
                case "FORM":
                        instance = new Northwind.Tag.Form();;
                    break;
                case "H1":
                        instance = new Northwind.Tag.H1();;
                    break;
                case "H2":
                        instance = new Northwind.Tag.H2();;
                    break;
                case "H3":
                        instance = new Northwind.Tag.H3();;
                    break;
                case "H4":
                        instance = new Northwind.Tag.H4();;
                    break;
                case "H5":
                        instance = new Northwind.Tag.H5();;
                    break;
                case "H6":
                        instance = new Northwind.Tag.H6();;
                    break;
                case "HEAD":
                        instance = new Northwind.Tag.Head();;
                    break;
                case "HEADER":
                        instance = new Northwind.Tag.Header();;
                    break;
                case "I":
                        instance = new Northwind.Tag.I();;
                    break;
                case "IFRAME":
                        instance = new Northwind.Tag.Iframe();;
                    break;
                case "IMG":
                        instance = new Northwind.Tag.Img();;
                    break;
                case "INPUT":
                        instance = new Northwind.Tag.Input();;
                    break;
                case "INS":
                        instance = new Northwind.Tag.Ins();;
                    break;
                case "KBD":
                        instance = new Northwind.Tag.Kbd();;
                    break;
                case "KEYGEN":
                        instance = new Northwind.Tag.Keygen();;
                    break;
                case "LABEL":
                        instance = new Northwind.Tag.Label();;
                    break;
                case "LEYEND":
                        instance = new Northwind.Tag.Leyend();;
                    break;
                case "LI":
                        instance = new Northwind.Tag.Li();;
                    break;
                case "LINK":
                        instance = new Northwind.Tag.Link();;
                    break;
                case "MAIN":
                        instance = new Northwind.Tag.Main();;
                    break;
                case "MAP":
                        instance = new Northwind.Tag.Map();;
                    break;
                case "MENU":
                        instance = new Northwind.Tag.Menu();;
                    break;
                case "MENUITEM":
                        instance = new Northwind.Tag.Menuitem();;
                    break;
                case "META":
                        instance = new Northwind.Tag.Meta();;
                    break;
                case "META":
                        instance = new Northwind.Tag.Meta();;
                    break;
                case "METER":
                        instance = new Northwind.Tag.Meter();;
                    break;
                case "NAV":
                        instance = new Northwind.Tag.Nav();;
                    break;
                case "NOSCRIP":
                        instance = new Northwind.Tag.Noscrip();;
                    break;
                case "OBJECT":
                        instance = new Northwind.Tag.Obj();;
                    break;
                case "OL":
                        instance = new Northwind.Tag.Ol();;
                    break;
                case "OPTGROUP":
                        instance = new Northwind.Tag.Optgroup();;
                    break;
                case "P":
                        instance = new Northwind.Tag.P();;
                    break;
                case "PARAM":
                        instance = new Northwind.Tag.Param();;
                    break;
                case "PRE":
                        instance = new Northwind.Tag.Pre();;
                    break;
                case "PROGRESS":
                        instance = new Northwind.Tag.Progress();;
                    break;
                case "Q":
                        instance = new Northwind.Tag.Q();;
                    break;
                case "RP":
                        instance = new Northwind.Tag.Rp();;
                    break;
                case "RT":
                        instance = new Northwind.Tag.Rt();;
                    break;
                case "RUBY":
                        instance = new Northwind.Tag.Ruby();;
                    break;
                case "S":
                        instance = new Northwind.Tag.S();;
                    break;
                case "SAMP":
                        instance = new Northwind.Tag.Samp();;
                    break;
                case "SCRIPT":
                        instance = new Northwind.Tag.Script();;
                    break;
                case "SECTION":
                        instance = new Northwind.Tag.Section();;
                    break;
                case "SELECT":
                        instance = new Northwind.Tag.Select();;
                    break;
                case "SMALL":
                        instance = new Northwind.Tag.Small();;
                    break;
                case "SOURCE":
                        instance = new Northwind.Tag.Source();;
                    break;
                case "SPAN":
                        instance = new Northwind.Tag.Span();;
                    break;
                case "STRONG":
                        instance = new Northwind.Tag.Strong();;
                    break;
                case "STYLE":
                        instance = new Northwind.Tag.Style();;
                    break;
                case "SUB":
                        instance = new Northwind.Tag.Sub();;
                    break;
                case "SUMMARY":
                        instance = new Northwind.Tag.Summary();;
                    break;
                case "SUP":
                        instance = new Northwind.Tag.Sup();;
                    break;
                case "TABLE":
                        instance = new Northwind.Tag.Table();;
                    break;
                case "TBODY":
                        instance = new Northwind.Tag.Tbody();;
                    break;
                case "TD":
                        instance = new Northwind.Tag.Td();;
                    break;
                case "TEXTAREA":
                        instance = new Northwind.Tag.Textarea();;
                    break;
                case "TFOOT":
                        instance = new Northwind.Tag.Tfoot();;
                    break;
                case "TH":
                        instance = new Northwind.Tag.Th();;
                    break;
                case "THEAD":
                        instance = new Northwind.Tag.Thead();;
                    break;
                case "TIME":
                        instance = new Northwind.Tag.Time();;
                    break;
                case "TITLE":
                        instance = new Northwind.Tag.Title();;
                    break;
                case "TR":
                        instance = new Northwind.Tag.Tr();;
                    break;
                case "TRACK":
                        instance = new Northwind.Tag.Track();;
                    break;
                case "U":
                        instance = new Northwind.Tag.U();;
                    break;
                case "UL":
                        instance = new Northwind.Tag.Ul();;
                    break;
                case "VAR":
                        instance = new Northwind.Tag.Var();;
                    break;
                case "VIDEO":
                        instance = new Northwind.Tag.Video();;
                    break;
                case "WBR":
                        instance = new Northwind.Tag.Wbr();;
                    break;
                default:
                        //instance = new Northwind.Html.Component();
                        //instance.create(tagName);
                    break;
            }
            return instance;
        }
    }
}

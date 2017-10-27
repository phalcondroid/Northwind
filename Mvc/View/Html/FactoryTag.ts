
///<reference path="./Component.ts"/>
///<reference path="./Elements/A.ts"/>
///<reference path="./Elements/Abbr.ts"/>
///<reference path="./Elements/Address.ts"/>
///<reference path="./Elements/Area.ts"/>
///<reference path="./Elements/Article.ts"/>
///<reference path="./Elements/Aside.ts"/>
///<reference path="./Elements/Audio.ts"/>
///<reference path="./Elements/B.ts"/>
///<reference path="./Elements/Base.ts"/>
///<reference path="./Elements/Bdi.ts"/>
///<reference path="./Elements/Bdo.ts"/>
///<reference path="./Elements/Blockquote.ts"/>
///<reference path="./Elements/Body.ts"/>
///<reference path="./Elements/Br.ts"/>
///<reference path="./Elements/Button.ts"/>
///<reference path="./Elements/Canvas.ts"/>
///<reference path="./Elements/Caption.ts"/>
///<reference path="./Elements/Cite.ts"/>
///<reference path="./Elements/Code.ts"/>
///<reference path="./Elements/Col.ts"/>
///<reference path="./Elements/ColGroup.ts"/>
///<reference path="./Elements/Datalist.ts"/>
///<reference path="./Elements/Db.ts"/>
///<reference path="./Elements/Del.ts"/>
///<reference path="./Elements/Details.ts"/>
///<reference path="./Elements/Dfn.ts"/>
///<reference path="./Elements/Dialog.ts"/>
///<reference path="./Elements/Div.ts"/>
///<reference path="./Elements/Dl.ts"/>
///<reference path="./Elements/Dt.ts"/>
///<reference path="./Elements/Em.ts"/>
///<reference path="./Elements/Embed.ts"/>
///<reference path="./Elements/Fieldset.ts"/>
///<reference path="./Elements/Figcaption.ts"/>
///<reference path="./Elements/Figure.ts"/>
///<reference path="./Elements/Footer.ts"/>
///<reference path="./Elements/Form.ts"/>
///<reference path="./Elements/H1.ts"/>
///<reference path="./Elements/H2.ts"/>
///<reference path="./Elements/H3.ts"/>
///<reference path="./Elements/H4.ts"/>
///<reference path="./Elements/H5.ts"/>
///<reference path="./Elements/H6.ts"/>
///<reference path="./Elements/Head.ts"/>
///<reference path="./Elements/Header.ts"/>
///<reference path="./Elements/I.ts"/>
///<reference path="./Elements/Iframe.ts"/>
///<reference path="./Elements/Img.ts"/>
///<reference path="./Elements/Input.ts"/>
///<reference path="./Elements/Ins.ts"/>
///<reference path="./Elements/Kbd.ts"/>
///<reference path="./Elements/Keygen.ts"/>
///<reference path="./Elements/Label.ts"/>
///<reference path="./Elements/Leyend.ts"/>
///<reference path="./Elements/Li.ts"/>
///<reference path="./Elements/Link.ts"/>
///<reference path="./Elements/Main.ts"/>
///<reference path="./Elements/Map.ts"/>
///<reference path="./Elements/Menu.ts"/>
///<reference path="./Elements/MenuItem.ts"/>
///<reference path="./Elements/Meta.ts"/>
///<reference path="./Elements/Meter.ts"/>
///<reference path="./Elements/Nav.ts"/>
///<reference path="./Elements/Noscrip.ts"/>
///<reference path="./Elements/Obj.ts"/>
///<reference path="./Elements/Ol.ts"/>
///<reference path="./Elements/Optgroup.ts"/>
///<reference path="./Elements/Option.ts"/>
///<reference path="./Elements/Output.ts"/>
///<reference path="./Elements/P.ts"/>
///<reference path="./Elements/Param.ts"/>
///<reference path="./Elements/Pre.ts"/>
///<reference path="./Elements/Progress.ts"/>
///<reference path="./Elements/Q.ts"/>
///<reference path="./Elements/Rp.ts"/>
///<reference path="./Elements/Rt.ts"/>
///<reference path="./Elements/Ruby.ts"/>
///<reference path="./Elements/S.ts"/>
///<reference path="./Elements/Samp.ts"/>
///<reference path="./Elements/Script.ts"/>
///<reference path="./Elements/Section.ts"/>
///<reference path="./Elements/Select.ts"/>
///<reference path="./Elements/Small.ts"/>
///<reference path="./Elements/Source.ts"/>
///<reference path="./Elements/Span.ts"/>
///<reference path="./Elements/Strong.ts"/>
///<reference path="./Elements/Style.ts"/>
///<reference path="./Elements/Sub.ts"/>
///<reference path="./Elements/Table.ts"/>
///<reference path="./Elements/Tbody.ts"/>
///<reference path="./Elements/Td.ts"/>
///<reference path="./Elements/Textarea.ts"/>
///<reference path="./Elements/Tfoot.ts"/>
///<reference path="./Elements/Th.ts"/>
///<reference path="./Elements/Thead.ts"/>
///<reference path="./Elements/Time.ts"/>
///<reference path="./Elements/Title.ts"/>
///<reference path="./Elements/Tr.ts"/>
///<reference path="./Elements/Track.ts"/>
///<reference path="./Elements/U.ts"/>
///<reference path="./Elements/Ul.ts"/>
///<reference path="./Elements/Var.ts"/>
///<reference path="./Elements/Video.ts"/>
///<reference path="./Elements/Wbr.ts"/>

namespace Northwind.Tag
{
    export class FactoryTag
    {
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
            let instance : Northwind.Html.Component;
            switch (tagName) {
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
                        instance = new Northwind.Html.Component();
                        instance.create(tagName);
                    break;
            }
            return instance;
        }
    }
}


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
    export class TagAdapter
    {
        /**
         *
         */
        private element;

        /**
         *
         */
        public constructor(element)
        {
            this.element = element;
        }

        /**
         *
         */
        public get(context)
        {
            var instance;
            if (this.element) {
                if (typeof this.element.nodeName != "undefined") {

                    switch (this.element.nodeName) {
                        case "A":
                                instance = new Northwind.Tag.A(context);
                            break;
                        case "ABBR":
                                instance = new Northwind.Tag.Abbr(context);
                            break;
                        case "ADDRESS":
                                instance = new Northwind.Tag.Address(context);
                            break;
                        case "AREA":
                                instance = new Northwind.Tag.Area(context);
                            break;
                        case "ARTICLE":
                                instance = new Northwind.Tag.Article(context);
                            break;
                        case "ASIDE":
                                instance = new Northwind.Tag.Aside(context);
                            break;
                        case "AUDIO":
                                instance = new Northwind.Tag.Audio(context);
                            break;
                        case "B":
                                instance = new Northwind.Tag.B(context);
                            break;
                        case "BASE":
                                instance = new Northwind.Tag.Base(context);
                            break;
                        case "BDI":
                                instance = new Northwind.Tag.Bdi(context);
                            break;
                        case "BDO":
                                instance = new Northwind.Tag.Bdo(context);
                            break;
                        case "BLOCKQUOTE":
                                instance = new Northwind.Tag.Blockquote(context);
                            break;
                        case "BODY":
                                instance = new Northwind.Tag.Body(context);
                            break;
                        case "BR":
                                instance = new Northwind.Tag.Br(context);
                            break;
                        case "BUTTON":
                                instance = new Northwind.Tag.Button(context);
                            break;
                        case "CANVAS":
                                instance = new Northwind.Tag.Canvas(context);
                            break;
                        case "CAPTION":
                                instance = new Northwind.Tag.Caption(context);
                            break;
                        case "CITE":
                                instance = new Northwind.Tag.Cite(context);
                            break;
                        case "CODE":
                                instance = new Northwind.Tag.Code(context);
                            break;
                        case "COL":
                                instance = new Northwind.Tag.Col(context);
                            break;
                        case "COLGROUP":
                                instance = new Northwind.Tag.ColGroup(context);
                            break;
                        case "DATALIST":
                                instance = new Northwind.Tag.Datalist(context);
                            break;
                        case "DB":
                                instance = new Northwind.Tag.Db(context);
                            break;
                        case "DEL":
                                instance = new Northwind.Tag.Del(context);
                            break;
                        case "DETAILS":
                                instance = new Northwind.Tag.Details(context);
                            break;
                        case "DFN":
                                instance = new Northwind.Tag.Dfn(context);
                            break;
                        case "DIALOG":
                                instance = new Northwind.Tag.Dialog(context);
                            break;
                        case "DIV":
                                instance = new Northwind.Tag.Div(context);
                            break;
                        case "DL":
                                instance = new Northwind.Tag.Dl(context);
                            break;
                        case "DT":
                                instance = new Northwind.Tag.Dt(context);
                            break;
                        case "EM":
                                instance = new Northwind.Tag.Em(context);
                            break;
                        case "EMBED":
                                instance = new Northwind.Tag.Embed(context);
                            break;
                        case "FIELDSET":
                                instance = new Northwind.Tag.Fieldset(context);
                            break;
                        case "FIGCAPTION":
                                instance = new Northwind.Tag.Figcaption(context);
                            break;
                        case "FIGURE":
                                instance = new Northwind.Tag.Figure(context);
                            break;
                        case "FOOTER":
                                instance = new Northwind.Tag.Footer(context);
                            break;
                        case "FORM":
                                instance = new Northwind.Tag.Form(context);
                            break;
                        case "H1":
                                instance = new Northwind.Tag.H1(context);
                            break;
                        case "H2":
                                instance = new Northwind.Tag.H2(context);
                            break;
                        case "H3":
                                instance = new Northwind.Tag.H3(context);
                            break;
                        case "H4":
                                instance = new Northwind.Tag.H4(context);
                            break;
                        case "H5":
                                instance = new Northwind.Tag.H5(context);
                            break;
                        case "H6":
                                instance = new Northwind.Tag.H6(context);
                            break;
                        case "HEAD":
                                instance = new Northwind.Tag.Head(context);
                            break;
                        case "HEADER":
                                instance = new Northwind.Tag.Header(context);
                            break;
                        case "I":
                                instance = new Northwind.Tag.I(context);
                            break;
                        case "IFRAME":
                                instance = new Northwind.Tag.Iframe(context);
                            break;
                        case "IMG":
                                instance = new Northwind.Tag.Img(context);
                            break;
                        case "INPUT":
                                instance = new Northwind.Tag.Input(context);
                            break;
                        case "INS":
                                instance = new Northwind.Tag.Ins(context);
                            break;
                        case "KBD":
                                instance = new Northwind.Tag.Kbd(context);
                            break;
                        case "KEYGEN":
                                instance = new Northwind.Tag.Keygen(context);
                            break;
                        case "LABEL":
                                instance = new Northwind.Tag.Label(context);
                            break;
                        case "LEYEND":
                                instance = new Northwind.Tag.Leyend(context);
                            break;
                        case "LI":
                                instance = new Northwind.Tag.Li(context);
                            break;
                        case "LINK":
                                instance = new Northwind.Tag.Link(context);
                            break;
                        case "MAIN":
                                instance = new Northwind.Tag.Main(context);
                            break;
                        case "MAP":
                                instance = new Northwind.Tag.Map(context);
                            break;
                        case "MENU":
                                instance = new Northwind.Tag.Menu(context);
                            break;
                        case "MENUITEM":
                                instance = new Northwind.Tag.Menuitem(context);
                            break;
                        case "META":
                                instance = new Northwind.Tag.Meta(context);
                            break;
                        case "META":
                                instance = new Northwind.Tag.Meta(context);
                            break;
                        case "METER":
                                instance = new Northwind.Tag.Meter(context);
                            break;
                        case "NAV":
                                instance = new Northwind.Tag.Nav(context);
                            break;
                        case "NOSCRIP":
                                instance = new Northwind.Tag.Noscrip(context);
                            break;
                        case "OBJECT":
                                instance = new Northwind.Tag.Obj(context);
                            break;
                        case "OL":
                                instance = new Northwind.Tag.Ol(context);
                            break;
                        case "OPTGROUP":
                                instance = new Northwind.Tag.Optgroup(context);
                            break;
                        case "P":
                                instance = new Northwind.Tag.P(context);
                            break;
                        case "PARAM":
                                instance = new Northwind.Tag.Param(context);
                            break;
                        case "PRE":
                                instance = new Northwind.Tag.Pre(context);
                            break;
                        case "PROGRESS":
                                instance = new Northwind.Tag.Progress(context);
                            break;
                        case "Q":
                                instance = new Northwind.Tag.Q(context);
                            break;
                        case "RP":
                                instance = new Northwind.Tag.Rp(context);
                            break;
                        case "RT":
                                instance = new Northwind.Tag.Rt(context);
                            break;
                        case "RUBY":
                                instance = new Northwind.Tag.Ruby(context);
                            break;
                        case "S":
                                instance = new Northwind.Tag.S(context);
                            break;
                        case "SAMP":
                                instance = new Northwind.Tag.Samp(context);
                            break;
                        case "SCRIPT":
                                instance = new Northwind.Tag.Script(context);
                            break;
                        case "SECTION":
                                instance = new Northwind.Tag.Section(context);
                            break;
                        case "SELECT":
                                instance = new Northwind.Tag.Select(context);
                            break;
                        case "SMALL":
                                instance = new Northwind.Tag.Small(context);
                            break;
                        case "SOURCE":
                                instance = new Northwind.Tag.Source(context);
                            break;
                        case "SPAN":
                                instance = new Northwind.Tag.Span(context);
                            break;
                        case "STRONG":
                                instance = new Northwind.Tag.Strong(context);
                            break;
                        case "STYLE":
                                instance = new Northwind.Tag.Style(context);
                            break;
                        case "SUB":
                                instance = new Northwind.Tag.Sub(context);
                            break;
                        case "SUMMARY":
                                instance = new Northwind.Tag.Summary(context);
                            break;
                        case "SUP":
                                instance = new Northwind.Tag.Sup(context);
                            break;
                        case "TABLE":
                                instance = new Northwind.Tag.Table(context);
                            break;
                        case "TBODY":
                                instance = new Northwind.Tag.Tbody(context);
                            break;
                        case "TD":
                                instance = new Northwind.Tag.Td(context);
                            break;
                        case "TEXTAREA":
                                instance = new Northwind.Tag.Textarea(context);
                            break;
                        case "TFOOT":
                                instance = new Northwind.Tag.Tfoot(context);
                            break;
                        case "TH":
                                instance = new Northwind.Tag.Th(context);
                            break;
                        case "THEAD":
                                instance = new Northwind.Tag.Thead(context);
                            break;
                        case "TIME":
                                instance = new Northwind.Tag.Time(context);
                            break;
                        case "TITLE":
                                instance = new Northwind.Tag.Title(context);
                            break;
                        case "TR":
                                instance = new Northwind.Tag.Tr(context);
                            break;
                        case "TRACK":
                                instance = new Northwind.Tag.Track(context);
                            break;
                        case "U":
                                instance = new Northwind.Tag.U(context);
                            break;
                        case "UL":
                                instance = new Northwind.Tag.Ul(context);
                            break;
                        case "VAR":
                                instance = new Northwind.Tag.Var(context);
                            break;
                        case "VIDEO":
                                instance = new Northwind.Tag.Video(context);
                            break;
                        case "WBR":
                                instance = new Northwind.Tag.Wbr(context);
                            break;
                        default:
                                instance = new Northwind.Html.Component();
                                instance.create(this.element.nodeName);
                            break;
                    }
                    instance.setElement(this.element);
                    return instance;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
    }
}

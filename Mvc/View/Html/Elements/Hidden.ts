///<reference path="../Component.ts"/>
///<reference path="../../../Controller.ts"/>

namespace Northwind.Tag
{
    /**
     * [Input description]
     * @type {[type]}
     */
    export class Hidden extends Northwind.Tag.Input
    {
    	public constructor()
    	{
    		super();
    		this.setHidden();
    	}
    }
}
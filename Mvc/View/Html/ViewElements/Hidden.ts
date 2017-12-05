///<reference path="../Component.ts"/>

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
namespace Northwind.Helper
{
    export class Uuid
    {
        public constructor()
        {
            
        }

        public static get()
        {
            var helper = Northwind.Helper;
            return helper.MathHelper.getS4() + helper.MathHelper.getS4() + '-' +
                   helper.MathHelper.getS4() + '-' + helper.MathHelper.getS4() + '-' +
                   helper.MathHelper.getS4() + '-' + Helper.MathHelper.getS4() +
                   helper.MathHelper.getS4() + helper.MathHelper.getS4();
        }
    }
}

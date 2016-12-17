/**
 * Created by 13219 on 2016/12/2.
 */
module.exports = RenderData;
function RenderData() {
    this.status = RenderData.Success;
    this.msg = 'success';
    this.req = null;
    this.result = null;
    this.typeName = 'RenderData';
};
RenderData.Fail = 'fail';
RenderData.Success = 'success';

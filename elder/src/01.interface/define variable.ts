/**
 * 接口实际上定义了某种契约，存在于实现者和调用者之间。
 */

/**
 * 定义变量的类型。
 */ 
interface LabelledValue {
    label: string; 
    ref?: string; // optional property.
    readonly length: number;
    [otherProp: string]: any; // indexed property.
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

/**
 * Assertion function set.
 * @NApiVersion 2.x
 * @NModuleScope Public
 *
 * @author          Javier Briceño
 * @copyright       Compara
 **/

 //algun Comentario..!!
export default class Assert {
  public static conditionError(
    cond: boolean,
    msg = 'assertion failed',
    ErrorClass: ErrorConstructor = Error
  ): void {
    if (!cond) throw new ErrorClass(msg);
  }

  public static keyExists(jsonObject: object, objectKey: string): boolean {
    return Boolean(jsonObject[objectKey]);
  }
}

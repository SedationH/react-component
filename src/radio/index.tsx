import InternalRadio from './Radio';
import Group from './Group';

type RadioType = typeof InternalRadio;
interface RadioInterface extends RadioType {
    Group: typeof Group;
}

const Radio = InternalRadio as RadioInterface;
Radio.Group = Group;
export default Radio;

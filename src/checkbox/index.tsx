import InterCheckbox from "./Checkbox"
import Group from "./Group"

type CheckboxType = typeof InterCheckbox
interface CheckboxInterface extends CheckboxType {
  Group: typeof Group
}

const Checkbox = InterCheckbox as CheckboxInterface
Checkbox.Group = Group

export default Checkbox

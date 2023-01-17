import Controller from "../Controller";

export class ToggleController extends Controller<boolean> {
  public toggle(): ToggleController {
    this.setValue(!this.value);

    return this;
  }
}

export default ToggleController;

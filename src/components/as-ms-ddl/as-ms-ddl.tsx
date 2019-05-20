import {
  Component,
  Prop,
  State,
  Event,
  EventEmitter,
  Watch
} from "@stencil/core";
import { IdropDownData, IdropDownOption } from "../../models/index";

@Component({
  tag: "as-ms-ddl",
  styleUrl: "as-ms-ddl.css",
  shadow: true
})
export class AsMultiSelectDropDown {
  @Prop({ mutable: true }) options: IdropDownOption;
  @Prop() data: Array<IdropDownData>;
  @State() showDdlPanel: boolean = false;
  @State() selection: Array<IdropDownData> = [];
  @Event() selectedValues: EventEmitter<Array<any>>;

  initializeOptions(options: IdropDownOption) {
    this.options = Object.assign(
      {
        selected_value_appear: "count"
      },
      options
    );
    console.log(this.options);
  }
  onSelection(evt: any, obj: IdropDownData) {
    debugger;
    evt.stopPropagation();
    console.log(evt.target);
    console.log(obj);
    if (evt.target.checked === true) {
      this.selection = [...this.selection, obj];
    } else {
      this.selection = [...this.selection.filter(x => x.label !== obj.label)];
      console.log(this.selection);
    }
  }
  onOk() {
    this.toggle();
  }
  onCancel() {
    this.selection = [];
    this.toggle();
  }
  selectedValuesHandler() {
    this.selectedValues.emit(this.selection);
  }
  componentWillLoad() {
    this.initializeOptions(this.options);
  }
  @Watch("data")
  onDataChange() {
    this.selection = [];
  }
  checkPreSelectedValue(obj: IdropDownData) {
    return this.selection.indexOf(obj) == -1 ? false : true;
  }
  toggle() {
    if (this.showDdlPanel) {
      this.selectedValuesHandler();
    }
    this.showDdlPanel = !this.showDdlPanel;
  }
  render() {
    return (
      <div class="as-ddl-container">
        <div
          class="as-ddl"
          data-value={
            this.selection.length > 0
              ? this.selection.length + " selected"
              : "please select"
          }
          onClick={() => {
            this.toggle();
          }}
          onBlur={() => {
            this.toggle();
          }}
        >
          {this.options.selected_value_appear === "count"
            ? this.selection.length > 0
              ? this.selection.length + " selected"
              : "please select"
            : this.selection.length > 0
              ? this.selection.map(x => x.label).join()
              : "please select"}
        </div>
        <i class="as-dropdown-icon down" />
        {this.showDdlPanel ? (
          <div class="as-ddlPanel">
            <div class="list-value">
              {this.data.map(x => {
                return (
                  <span data-value={x.value}>
                    <input
                      onChange={e => {
                        this.onSelection(e, x);
                      }}
                      type="checkbox"
                      checked={this.checkPreSelectedValue(x)}
                    />
                    {x.label}
                  </span>
                );
              })}
            </div>
            <div class="as-action-button">
              <button class="ok" onClick={() => this.onOk()}>
                Ok
              </button>
              <button class="cancel" onClick={() => this.onCancel()}>
                Cancel
              </button>
            </div>
          </div>
        ) : (
            ""
          )}
      </div>
    );
  }
}

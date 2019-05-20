# multi_select_dropdown_webcomponent
Multi selection drop down web-component developed in Stencil.js.

# Usage
<script src='https://unpkg.com/multi-select-dropdown-webcomponent@latest/dist/as-ms-ddl.js'></script>   


# In javascript
# Under body tag
<as-ms-ddl></as-ms-ddl>
<script>
      let component = document.querySelector('as-ms-ddl');
      component.data = [{ label: "a", value: "1" }, { label: "b", value: "2" }, { label: "c", value: "3" }, { label: "d", value: "4" }, { label: "e", value: "5" }]; 
      component.addEventListener('selectedValues', event => {
      console.log(event.detail);
    });          
</script>

<!-- Auto Generated Below -->

## Properties

| Property  | Attribute                                 | Description                   | Type              | Default     |
| --------- | -------------------------------------     | ----------------------------- | ----------------- | ----------- |
| `data`    |  `[{label:string,value:string}]`          | `array of IdropDownData`      | `IdropDownData[]` | `undefined` |    
|           |                                           | `in the form of label, value` |                   |             |
| `options` |  `{selected_value_appear:string}`         | `count OR value`              | `IdropDownOption` | `count`     |
---------------------------------------------------------------------------------------------------------------------------

## Events

| Event            | Description                             | Type                      |
| ---------------- | -----------                             | ------------------------- |
| `selectedValues` | `return array repective of`             | `Array<IdropDownData>`    |
|                  | `selected_value_appear option passed`   |                           |
------------------------------------------------------------------------------------------

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
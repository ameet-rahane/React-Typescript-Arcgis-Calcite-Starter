import React, { useEffect, useState } from 'react';
import '@esri/calcite-components/dist/calcite/calcite.css';
import './App.css'; 



function App() {
  const [ImageServerList, setImageServerList]  = useState([]);
  const [HelloWord, setHelloWord] = useState("A");
  useEffect(() => {
  fetch("http://sampleserver6.arcgisonline.com/arcgis/rest/services?f=pjson")
  .then(function(resp) {
    return resp.json();
  })
  .then(function(data) {
      data.services.forEach(function(item, index) {
        if(item.type === "ImageServer")
          ImageServerList.push(<calcite-pick-list-item label={item.name}></calcite-pick-list-item>);
      });
  })
  .then(function() {
    setHelloWord("Hello");
  }) 
  });
  
  return ( 
    <div className="AppName">
      <div className="center">
      <div className="loaded">Details Loaded</div>
    <calcite-shell dir="ltr" class="calcite-theme-light"> 
    
    <header slot="header-content">
        <h2>ESRI Assignment 1 - Ameet Rahane</h2>
      </header>

    <calcite-shell-panel slot="primary-panel" position="start">
      <calcite-pick-list  id="PickList">{ImageServerList}</calcite-pick-list> 
      <calcite-action-bar class="calcite-theme-dark" slot="action-bar">
        <calcite-action-group>
          <calcite-action
            text="Add"
            label="Add Item"
            icon="plus"
          ></calcite-action>
          <calcite-action
            text="Save"
            label="Save Item"
            icon="save"
          ></calcite-action>
        </calcite-action-group>
        <calcite-action-group>
          <calcite-action
            text="Layers"
            label="View Layers"
            icon="layers"
          ></calcite-action>
        </calcite-action-group>
      </calcite-action-bar>
      <p></p>
    </calcite-shell-panel>
    <div
      style={{"width":"100%","height":"100%","backgroundImage":"linear-gradient(45deg, #ccc 25%, transparent 25%),\n  linear-gradient(-45deg, #ccc 25%, transparent 25%),\n  linear-gradient(45deg, transparent 75%, #ccc 75%),\n  linear-gradient(-45deg, transparent 75%, #ccc 75%)","backgroundSize":"20px 20px","backgroundPosition":"0 0, 0 10px, 10px -10px, -10px 0px"}}
    ></div>
    <calcite-shell-center-row height-scale="s" position="end" slot="center-row">
      <div
        style={{"width":"50vw","backgroundColor":"var(--calcite-app-background-content)","padding":"var(--calcite-app-cap-spacing) var(--calcite-app-side-spacing)"}}>
        <span>My Shell Center Row</span>
      </div>
    </calcite-shell-center-row>
    <calcite-shell-panel slot="contextual-panel" position="end">
      <calcite-action-bar class="calcite-theme-light" slot="action-bar">
        <calcite-action-group>
        <calcite-popover-manager>
          <calcite-action text="Idea" id="reference-element" label="Add Item" icon="lightbulb" appearance="solid" scale="m"></calcite-action>                         
        </calcite-popover-manager>
        <calcite-popover className="calcite-theme-light" reference-element="reference-element" placement="auto" offset-distance="6" offset-skidding="0" open="" text-close="Close">
          <div style={{"padding":"55px 16px"}}>
            <p>
              This application was built by Esri's <a href="mailto: arahane@esri.com" style={{"color":"cornflowerblue"}}>@arahane</a> </p>
            <p>using <a href="https://esri.github.io/calcite-components/" style={{"color":"cornflowerblue"}}> Calcite Components</a></p>      
          </div>
        </calcite-popover> 
        </calcite-action-group>
    </calcite-action-bar>
    <p>My Trailing Panel</p>
  </calcite-shell-panel>
  <footer slot="footer-content">My Shell Footer</footer>
 
</calcite-shell>
</div>
</div>
  );
}

export default App;

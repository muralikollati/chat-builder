import { useEffect, useState } from 'react'
import './App.css'
import AppBuilder, { ToolbarComponents } from '@appbuilder/react'
import AppBuilderReactSdk, {
  ToolbarPreset,
  ToolbarItem,
  IconButton,
} from "@appbuilder/react";
import React from "react";

function App() {

  const Reactions = () => {
    return (
      <ToolbarItem>
        <IconButton
          iconProps={{
            name: "celebration",
            iconSize: 28,
            tintColor: "orange",
          }}
          btnTextProps={{
            textColor: "white",
            text: "Reactions",
          }}
          onPress={() => {
            // handle onClick of new toolbar item
            console.warn("new toolbar item clicked");
          }}
        />
      </ToolbarItem>
    );
  };
  
  const BottomToolBarOverride = () => {
    return (
      <ToolbarPreset
        align="bottom"
        customItems={[
          {
            component: Reactions,
            order: 9, // position at which item should appear in bottom list
            align: "center", // can be start,center,end
            hide: "no", // show icon or not
          },
        ]}
        snapPointsMinMax={[100, 300]}
      />
    );
  };

  React.useEffect(() => {
    AppBuilderReactSdk.customize({
      components: {
        videoCall: {
          bottomToolBar: BottomToolBarOverride,
        },
      },
    });
  });
  return (
    <div style={{display: 'flex', width: '90vw', height: '90vh', margin: '0', padding: '0', flexDirection: 'column'}}>
      <AppBuilderReactSdk.View />
    </div>
  )
}

export default App

import { useState, useEffect } from "react";
import { Fieldset } from "@headlessui/react";
import { AppInfoProps } from "../../typings";

import "./styles.css"

// export function AppInfoItem(props: AppInfoItemProps): JSX.Element {
//     // console.log(`AppInfoItem: ${JSON.stringify(props)}`);
//     return (
//         <GridListItem textValue={props.packageName} id={props.id}>
//             <Checkbox value={props.packageName} />
//             <div className="checkbox" aria-hidden="true">
//                 <svg viewBox="0 0 18 18"><polyline points="1 9 7 14 15 4" /></svg>
//             </div>
//             <div className="label">{props.name}</div>
//             <Button aria-label="Info">ⓘ</Button>
//         </GridListItem>
//     )
// }

function EmptyList(): JSX.Element {
    return <div>{"No apps found."}</div>
}

export function AppInfoDisplay(props: AppInfoProps): JSX.Element {
    const [components, setComponents] = useState<JSX.Element | JSX.Element[]>([]);

    useEffect(() => {
        // console.log(`Package info AppInfoDisplay: ${JSON.stringify(props)}`)
        // console.log(JSON.stringify(props.length))
        if (!props.packageList || typeof props.packageList.map !== "function" || typeof props.packageList === "undefined" || props.packageList === null || props.packageList.length == 0) {
            setComponents(<div>"No apps found."</div>)
        } else {
            // console.log(`Genrating app list: ${JSON.stringify(props.packageList)}`);
            // console.log(`Props map type: ${typeof props.packageList.map}`);
            const packageList = props.packageList.map((value, index) => (
                // console.log(JSON.stringify(value.packageName))
                // console.log(JSON.stringify(value.name))
                
                // <AppInfoItem key={index} id={index} packageName={value.packageName} name={value.name} icon={value.icon} />
                // <div>
                //     <div>{`index: ${index}`}</div>
                //     <div>{`packageName: ${value.packageName}`}</div>
                //     <div>{`name: ${value.name}`}</div>
                //     <div>{`icon: ${value.icon}`}</div>
                // </div>
                
            ))

            setComponents(packageList)
        }
    }, [props.packageList])

  return (
    // <div>{components}</div>
    // <GridList aria-label="App selection" selectionMode="multiple">
    //     <CheckboxGroup>
    //     <Label>Notify for Which Apps?</Label>
    //         {
    //             // components
    //             "cunt"
    //         }
    //     </CheckboxGroup>
    // </GridList>
    <GridList aria-label="App selection" selectionMode="multiple" renderEmptyState={EmptyList}>
        
        {components}
    </GridList>
  );
}
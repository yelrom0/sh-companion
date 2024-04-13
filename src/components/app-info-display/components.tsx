import { useMemo } from "react";
import { ProcessedPackageInfo, AppInfoItemProps } from "../../typings";
import {GridList, GridListItem, Button, CheckboxGroup, Checkbox, Label} from 'react-aria-components';

import "./styles.css"

export function AppInfoItem(props: AppInfoItemProps): JSX.Element {
    return (
        <GridListItem textValue={props.packageName} id={props.id}>
            <Checkbox value={props.packageName} />
            <div className="checkbox" aria-hidden="true">
                <svg viewBox="0 0 18 18"><polyline points="1 9 7 14 15 4" /></svg>
            </div>
            <div className="label">{props.name}</div>
            <Button aria-label="Info">ⓘ</Button>
        </GridListItem>
    )
}

export function AppInfoDisplay(props: ProcessedPackageInfo[]): JSX.Element {
    const apps = useMemo(() => {
        // console.log(JSON.stringify(props))
        // console.log(JSON.stringify(props.length))
        if (!props || props === undefined || props === null || props.length === 0) {
            return (<div>"No apps found."</div>)
        } else {
            console.log(`Genrating app list: ${JSON.stringify(props)}`);
            return props.map((app, idx) => {
                // console.log(JSON.stringify(app.packageName))
                // console.log(JSON.stringify(app.name))
                return (
                    <AppInfoItem key={idx} id={idx} packageName={app.packageName} name={app.name} icon={app.icon} />
                )
            })
        }
    }, [props])

  return (
    
    <GridList aria-label="App selection" selectionMode="multiple">
        <CheckboxGroup>
        <Label>Notify for Which Apps?</Label>
            {
                apps
            }
        </CheckboxGroup>
    </GridList>
  );
}
import { useMemo } from "react";
import { ProcessedPackageInfo } from "../../typings";
import {GridList, GridListItem, Button, CheckboxGroup, Checkbox, Label} from 'react-aria-components';

import "./styles.css"

export function AppInfoDisplay(props: ProcessedPackageInfo[]): JSX.Element {
    const apps = useMemo(() => {
        if (props.length === 0) {
            return "No apps found."
        } else {
    
            return props.map((app, idx) => {
                console.log(JSON.stringify(app.packageName))
                console.log(JSON.stringify(app.name))
                return (
                    <GridListItem textValue={app.packageName} id={idx}>
                        <Checkbox value={app.packageName} />
                        <div className="checkbox" aria-hidden="true">
                            <svg viewBox="0 0 18 18"><polyline points="1 9 7 14 15 4" /></svg>
                        </div>
                        <div className="label">{app.name}</div>
                        <Button aria-label="Info">ⓘ</Button>
                    </GridListItem>
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
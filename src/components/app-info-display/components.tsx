import { ProcessedPackageInfo } from "../../typings";

export function AppInfoDisplay(props: ProcessedPackageInfo) {
  return (
    <div>
        <img src={URL.createObjectURL(props.icon)}></img>
        <h1>{props.name}</h1>
        <p>{props.packageName}</p>
    </div>
  );
}
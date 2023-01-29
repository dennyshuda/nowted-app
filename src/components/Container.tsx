import { ContainerType } from "../models";

export default function Container({ children }: ContainerType) {
  return <div className="p-5 text-white">{children}</div>;
}

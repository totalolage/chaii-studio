import { ImageProps, getImageProps } from "next/image";
import { omit, pick } from "lodash/fp";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@chaii/ui/components/avatar";

type Props = Omit<ImageProps, "fill">;

export default function NextAvatar(props: Props) {
  const imageProps = getImageProps({ width: 40, height: 40, ...props }).props;
  console.log(imageProps);

  return (
    <Avatar
      className={props.className}
      style={pick(["width", "height"], imageProps)}
    >
      <AvatarImage
        {...omit(["blurWidth", "blurHeight", "style"], imageProps)}
        style={pick(["objectFit", "objectPosition"], imageProps.style)}
      />
      {props.placeholder === "blur" && (
        <AvatarFallback style={imageProps.style} />
      )}
    </Avatar>
  );
}

import * as React from "react";
import ImageListItem from "../ImageListItem";
import ImageListItemBar from "../../ImageListItemBar/ImageListItemBar";
import Image from "../../Image/Image";
import Icon from "../../Icon/Icon";

export default (
    <ImageListItem cols={1} uxpId="1">
      <Image
        src="http://uxpin.com/images/homepage/about-us/location-gdynia.jpg"
        alt="Gdynia"
        uxpId="1.1"
        width="100%"
        height="100%"
        objectFit="cover"
      />
      <ImageListItemBar
        uxpId="1.2"
        title="Gdynia"
        titlePosition="top"
        actionIcon={<Icon uxpId="1.2.1">star_border</Icon>}
        position="left"
      />
    </ImageListItem>
);
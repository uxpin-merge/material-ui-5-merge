import React from "react";
import ImageList from "../ImageList";
import ImageListItem from "../../ImageListItem/ImageListItem";
import ImageListItemBar from "../../ImageListItemBar/ImageListItemBar";
import Image from "../../Image/Image";
import Icon from "../../Icon/Icon";

export default (
  <ImageList rowHeight={160} cols={3} uxpId="1">
    <ImageListItem cols={1} uxpId="1.1">
      <Image src="http://uxpin.com/images/homepage/about-us/location-gdynia.jpg" alt="Gdynia" uxpId="1.1.1" objectFit="cover" width="100%" height="100%" />
      <ImageListItemBar
        uxpId="1.1.2"
        title="Gdynia"
        titlePosition="top"
        actionIcon={<Icon uxpId="1.1.2.1">star_border</Icon>}
        postion="left"
      />
    </ImageListItem>
    <ImageListItem cols={2} uxpId="1.2">
      <Image src="http://uxpin.com/images/homepage/jobs/bg-gdansk.jpg" alt="Gdansk" uxpId="1.2.1" objectFit="cover" width="100%" height="100%" />
      <ImageListItemBar
        uxpId="1.2.2"
        title="Gdansk"
        titlePosition="top"
        actionIcon={<Icon uxpId="1.2.2.1">star_border</Icon>}
        postion="left"
      />
    </ImageListItem>
    <ImageListItem cols={3} uxpId="1.3">
      <Image uxpId="1.3.1" src="http://uxpin.com/images/homepage/about-us/location-mountain-view.jpg" alt="Mountain View" objectFit="cover" width="100%" height="100%" />
      <ImageListItemBar
        uxpId="1.3.2"
        title="Mountain View"
        titlePosition="top"
        actionIcon={<Icon uxpId="1.3.2.1">star_border</Icon>}
        postion="left"
      />
    </ImageListItem>
  </ImageList>
);
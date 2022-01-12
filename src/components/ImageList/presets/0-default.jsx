import React from "react";
import ImageList from "../ImageList";
import ImageListItem from "../../ImageListItem/ImageListItem";
import ImageListItemBar from "../../ImageListItemBar/ImageListItemBar";
import Image from "../../Image/Image";
import IconButton from "../../IconButton/IconButton";

export default (
  <ImageList rowHeight={160} cols={3} uxpId="1">
    <ImageListItem cols={1} uxpId="1.1">
      <Image src="https://images.unsplash.com/photo-1604871000636-074fa5117945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Trends" uxpId="1.1.1" objectFit="cover" width="100%" height="100%" />
      <ImageListItemBar
        uxpId="1.1.2"
        title="Trends"
        titlePosition="top"
        actionIcon={<IconButton uxpId="Icon-Button-1" color="inherit" ariaLabel="Trends icon button">star_border</IconButton>}
        postion="left"
      />
    </ImageListItem>
    <ImageListItem cols={2} uxpId="1.2">
      <Image src="https://images.unsplash.com/photo-1608501947097-86951ad73fea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Insights
      " uxpId="1.2.1" objectFit="cover" width="100%" height="100%" />
      <ImageListItemBar
        uxpId="1.2.2"
        title="Insights
        "
        titlePosition="top"
        actionIcon={<IconButton uxpId="Icon-Button-2" color="inherit" ariaLabel="Insights icon button">star_border</IconButton>}
        postion="left"
      />
    </ImageListItem>
    <ImageListItem cols={3} uxpId="1.3">
      <Image src="https://images.unsplash.com/photo-1607893378714-007fd47c8719?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Inspiration" uxpId="1.3.1" objectFit="cover" width="100%" height="100%" />
      <ImageListItemBar
        uxpId="1.3.2"
        title="Inspiration"
        titlePosition="top"
        actionIcon={<IconButton uxpId="Icon-Button-3" color="inherit" ariaLabel="Inspiration icon button">star_border</IconButton>}
        postion="left"
      />
    </ImageListItem>
  </ImageList>
);
import * as React from "react";
import ImageListItem from "../ImageListItem";
import ImageListItemBar from "../../ImageListItemBar/ImageListItemBar";
import Image from "../../Image/Image";
import IconButton from "../../IconButton/IconButton";

export default (
    <ImageListItem cols={1} uxpId="1.1">
      <Image 
        src="https://images.unsplash.com/photo-1604871000636-074fa5117945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
        alt="Trends" 
        uxpId="1.1.1" 
        objectFit="cover" 
        width="100%" 
        height="100%" 
      />
      <ImageListItemBar
        uxpId="1.1.2"
        title="Trends"
        titlePosition="top"
        actionIcon={<IconButton uxpId="Icon-Button-1" color="inherit" ariaLabel="Trends icon button">star_border</IconButton>}
        postion="left"
      />
    </ImageListItem>
);
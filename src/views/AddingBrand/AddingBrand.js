import React from "react";
import { Grid, InputLabel } from "material-ui";

import {
  ProfileCard,
  RegularCard,
  Button,
  CustomInput,
  ItemGrid
} from "components";

import avatar from "assets/img/faces/no-image-icon.png";
import { style } from "@material-ui/system";

function Edit({ ...props }) {
  return (
    <div>

    <Grid container>
      <ItemGrid xs={12} sm={12} md={8}>
        <RegularCard
          cardTitle="برند جدید"
          content={
            <div>
             
             
             
              <Grid container>
                <ItemGrid xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="عنوان"
                    id="country"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </ItemGrid>
              </Grid>
              <Grid container>
              
                <ItemGrid xs={12} sm={12} md={12}>
                 
                  <CustomInput
                    labelText="توضیح"
                    id="country"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </ItemGrid>
              </Grid>
          
            </div>
          }
          footer={<Button color="primary">ثبت</Button>}
        />
      </ItemGrid>
      <ItemGrid xs={12} sm={12} md={4}>
        <ProfileCard
          avatar={avatar}
          title="لوگو"
          footer={
            <Button color="primary" round>
        تغییر لوگو
            </Button>
          }
        />
      </ItemGrid>
     
    </Grid>
  </div>
  );
}

export default Edit;

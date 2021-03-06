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
import hist from '../../hist'
function Edit({ ...props }) {
  return (
    <div>

      <Grid container>
        <ItemGrid xs={12} sm={12} md={8}>
          <RegularCard
            cardTitle="ویرایش"
            content={
              <div>
               
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={12}>
                    <CustomInput
                      labelText="توضیحات"
                      id="first-name"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </ItemGrid>
             
                </Grid>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={12}>
                    <CustomInput
                      labelText="آدرس"
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
                      labelText="شماره"
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
                      labelText="فکس"
                      id="country"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </ItemGrid>
                </Grid>
                <Grid container>
                <ItemGrid xs={12} sm={12} md={6}>
                  <div>
                  <h6>برند ها</h6>
                    </div>
                    </ItemGrid>
                    <ItemGrid xs={12} sm={12} md={6} style={{marginTop: '3%',}}>
                  <div>
                  <Button  onClick={() => hist.push("/AddingBrand")} color="primary">اضافه</Button>
                    </div>
                    </ItemGrid> 
                </Grid>
              </div>
            }
            footer={<Button color="primary">اعمال تغییرات</Button>}
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={4}>
          <ProfileCard
            avatar={avatar}
            title="نام شرکت"
            footer={
              <Button color="primary" round>
          تغییر لوگو
              </Button>
            }
          />
           <ProfileCard
            avatar={avatar}
            title="نماد"
            footer={
              <Button color="primary" round>
                تغییر نماد
              </Button>
            }
          />
        </ItemGrid>
       
      </Grid>
    </div>
  );
}

export default Edit;

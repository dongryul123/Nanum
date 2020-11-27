// import React, {Component} from 'react';
// import ApiService from '../../../ApiService'
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';

// export default function AddressForm() {


//         return (
//             <React.Fragment>
//             <Typography variant="h6" gutterBottom>
//                 회원 정보
//             </Typography>
//             <Grid container spacing={3}>
//                 <Grid item xs={12}>
//                 <TextField
//                     required
//                     id="id"
//                     name="id"
//                     label="아이디"
                    
//                     autoComplete="id"
//                 />
//                 </Grid>
//                 <Grid item xs={12}>
//                     <TextField
//                     required
//                     id="password"
//                     name="password"
//                     label="비밀번호"
                    
//                     type="password"
//                     autoComplete="current-password"
//                     />
//                 </Grid>
//                 <Grid item xs={12}>
//                     <TextField
//                     required
//                     id="passwordCheck"
//                     name="passwordCheck"
//                     label="비밀번호 확인"
//                     type="password"
//                     autoComplete="current-password"
//                     />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                 <TextField
//                     required
//                     id="firstName"
//                     name="firstName"
//                     label="성"
//                     fullWidth
//                     autoComplete="given-name"
//                 />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                 <TextField
//                     required
//                     id="lastName"
//                     name="lastName"
//                     label="이름"
//                     fullWidth
//                     autoComplete="family-name"
//                 />
//                 </Grid>
//                 <Grid item xs={12}>
//                 <TextField
//                     required
//                     id="age"
//                     name="age"
//                     label="나이"
//                     fullWidth
//                     autoComplete="shipping address-line1"
//                 />
//                 </Grid>
//                 <Grid item xs={12}>
//                 <TextField
//                     id="tel"
//                     name="tel"
//                     label="전화번호"
//                     fullWidth
//                     autoComplete="shipping address-line2"
//                 />
//                 </Grid>
//             </Grid>
//             </React.Fragment>
//         );
//     }

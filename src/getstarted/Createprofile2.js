import React, {useState, useEffect} from "react";
import $ from 'jquery';
import '../Content/Content/nwlogin.css';
import '../Content/Content/nwlogin2.css';
// import '../AllJs/details3-tchr.js';
// import '../AllJs/moredetails.js';
import { Headersignup } from '../headersignup';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';
import useLoader from "../useLoader";

export const CreateProfileTchr = () => {
    const [loader, showLoader, hideLoader] = useLoader();

    useEffect(() => {
        showLoader();
        $('#login').hide();
      }, []);

      React.useEffect(
          ()=> {
          var crtpvll = sessionStorage.getItem("crtprflvll");
  
          if(crtpvll == "True") {        
              hideLoader();
              $('#login').show();
          }
          else {
              showLoader();
              $('#login').hide();
              window.location.href="/";
          }
      });


    const handleChange = (e) => {
        //alert("fhhfg")

        var scode = $('#scode').val().trim();
        var name = $('#yourname').val().trim();
        var mobile = $('#mobile').val().trim();
        var gender = $('#gender').val();
        
        //var psswrd_rpt = $('#repeatpassword').val().trim();
        if ((scode.length > 0) && (name.length > 0) && (mobile.length > 9) && (gender !== "0")) {
            //alert("inside if")
            $('#nxt-btnnfnltchr').removeAttr('disabled');
        } else {
            //alert("inside else")
            $('#nxt-btnnfnltchr').attr('disabled', 'disabled');
        }
    }

    var accounttypepswrd = sessionStorage.getItem("acntypesignup");
    var masteridtosendapi = sessionStorage.getItem("Masteridsnd");
    // alert(sessionStorage.getItem("acntypesignup"));

      const onBlur = (e) => {
        var scode = $('#scode').val();
        var udiv1 = $('#uiscs');

        if (scode.trim() === '') {
            udiv1.attr('errr', '');
            udiv1.removeClass('valid-inp');
        }
        else {
            udiv1.removeAttr('errr');
            udiv1.addClass('valid-inp');
        }
    }

    const onBlur2 = (e) => {
        var name = $('#yourname');
        var namevl = $('#yourname').val();
        var udiv2 = $('#uiscs2');
        var nmdspc = new RegExp('^[a-zA-Z\\s]+$');

        if (namevl.trim() === '') {
            udiv2.attr('errr', '');
            udiv2.removeClass('valid-inp');
            $('#uiscs2 .kckh4-spn').removeClass('vlactvv');
            $('#uiscs2 .err-txt').text('Your name is required');
        }
        else if(!nmdspc.test(namevl)) {
            udiv2.attr('errr', '');
            udiv2.removeClass('valid-inp');
            $('#uiscs2 .kckh4-spn').addClass('vlactvv');
            $('#uiscs2 .err-txt').text('Please enter the correct name');
            $('#nxt-btnnfnltchr').attr('disabled', 'disabled');
        }
        else {
            udiv2.removeAttr('errr');
            udiv2.addClass('valid-inp');
            $('#uiscs2 .kckh4-spn').removeClass('vlactvv');
            $('#uiscs2 .err-txt').text('Your name is required');
        }
    }

    const onBlur3 = (e) => {
        var gender = $('#gender');
        var udiv3 = $('#uiscs3');

        if (gender.val() === '0') {
            udiv3.attr('errr', '');
            udiv3.removeClass('valid-inp');
        }
        else {
            udiv3.removeAttr('errr');
            udiv3.addClass('valid-inp');
        }
    }

    var mobilee = $('#mobile');
    $(mobilee).keyup(function () {
        var $th = $(this);
        $th.val($th.val().replace(/[^0-9']/g, ''));
    });

    const onBlur4 = (e) => {
        var mobile = $('#mobile');
        var mobilevll = $('#mobile').val();
        var udiv4 = $('#uiscs4');
        var mblrgx = new RegExp('^[0-9]+$');


        if (mobilevll.trim() === '') {
            udiv4.attr('errr', '');
            udiv4.removeClass('valid-inp');
            $('#uiscs4 .kckh4-spn').removeClass('vlactvv');
            $('#uiscs4 .err-txt').text('Mobile number is required');
        }
        else if (mobilevll.length < 10) {
            udiv4.attr('errr', '');
            udiv4.removeClass('valid-inp');
            $('#uiscs4 .kckh4-spn').addClass('vlactvv');
            $('#uiscs4 .err-txt').text('Please enter the correct mobile number');
        }
        else if(!mblrgx.test(mobilevll)) {
            udiv4.attr('errr', '');
            udiv4.removeClass('valid-inp');
            $('#uiscs4 .kckh4-spn').addClass('vlactvv');
            $('#uiscs4 .err-txt').text('Please enter the correct mobile number');
            $('#nxt-btnnfnltchr').attr('disabled', 'disabled');
        }
        else {
            udiv4.removeAttr('errr');
            udiv4.addClass('valid-inp');
            $('#uiscs4 .kckh4-spn').removeClass('vlactvv');
            $('#uiscs4 .err-txt').text('Mobile number is required');
        }
    }


      const [schoolCodeTeacherSignup, setSchoolCodeTeacherSignup] = useState('');
      const [teacherNameSignup, setTeacherNamesignup] = useState('');
      const [teacherGenderSignup, setTeacherGendersignup] = useState('');
      const [teacherMobileSignup, setTeacherMobilesignup] = useState('');

      const handleSubmit = e => {
        //console.log('handleSubmit run');
        e.preventDefault(); // 👈️ prevent page refresh
       
        var nxtbtnlodr = $('#nxt-btnn-loader');
        var nxtbtntxt = $('#nxt-btnn-txt');
        nxtbtnlodr.show();
        nxtbtntxt.hide();
    
        // 👇️ access input values here
       //alert(masteridtosendapi + "masteridtosendapi");
       if (teacherNameSignup.indexOf(' ') >= 0)
       {
        var nameses= teacherNameSignup.substring(0, teacherNameSignup.indexOf(' ')); 
        sessionStorage.setItem("usernamesession", nameses);
       }
       else{
        
        sessionStorage.setItem("usernamesession", teacherNameSignup);
       }
       
       
       

        fetch('https://feediiapi.azurewebsites.net/api/login/EnterStaff', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                },
            body: JSON.stringify({ usermasterId : masteridtosendapi,
                schoolCode : schoolCodeTeacherSignup.trim(),
                name : teacherNameSignup.trim(),
                gender: teacherGenderSignup.trim(),
                mobile: teacherMobileSignup.trim()
            })
            }). then(response=> { return response.json(); })
            .then((data) => {
                if (data[0].Message == "School Not exists")
                {
                    var udiv = $('#uiscs');
                    udiv.attr('errr', '');
                    $('.kckh4-svg > g').removeClass('loginerrsvg');
                    $('#uiscs .kckh4-spn').addClass('vlactvv');
                    $("#uiscs .err-txt").text('School code does not exist! Please enter correct school code.');
                    udiv.removeClass('valid-inp');
                    $("#uiscs .kckh4-svg > g").removeClass("grn-strk").addClass("stroke");
                    //alert("School not exist");
                    nxtbtnlodr.hide();
                    nxtbtntxt.show();
                }
                else{
                    sessionStorage.setItem("staffidsession", data[0].StaffId);
                    window.location.href = "/tch/surveybyme";
                }
            })
        .catch(error =>{
            nxtbtnlodr.hide();
            nxtbtntxt.show();
            console.log(error);
        })
                           

      };


    return <div>
        <Headersignup />

        {loader}
        <div className="be-wrapper be-login innerwrapper" id="login">
            <div className="be-content">
                <div className="main-content container-fluid disp-flex pb-0">
                    <div className="col-lg-8 col-xs-12" style={{margin: "0 auto", maxWidth: "752px"}}> 
                        <div>
                            <div className="dvvmmn dvmmbw">
                                <div style={{display: "flex", marginLeft: "5px"}} className="dvvmmn2">
                                    <div style={{paddingRight: "15px"}}>
                                        <div style={{position: "relative", width: "78px",height: "78px"}}>
                                            <div className="kldkc">3</div>
                                            <svg className="kldkc-svg" width="100%" height="100%" viewBox="0 0 34 34">
                                                <circle className="kldkc-crcl1" cx="17" cy="17" r="15.91549430918954" fill="transparent" stroke="#E8E8F0" strokeWidth="1" strokeDasharray="30.333333333333332 3" strokeDashoffset="23.5"></circle>
                                                <circle className="kldkc-crcl2" cx="17" cy="17" r="15.91549430918954" fill="transparent" stroke="transparent" strokeWidth="1" strokeDasharray="30.333333333333332 69.66666666666667" strokeDashoffset="23.5"></circle>
                                                <circle className="kldkc-crcl2" cx="17" cy="17" r="15.91549430918954" fill="transparent" stroke="transparent" strokeWidth="1" strokeDasharray="30.333333333333332 69.66666666666667" strokeDashoffset="-9.833333333333332"></circle>
                                                <circle className="kldkc-crcl2" cx="17" cy="17" r="15.91549430918954" fill="transparent" stroke="transparent" strokeWidth="1" strokeDasharray="30.333333333333332 69.66666666666667" strokeDashoffset="-43.166666666666664"></circle>
                                            </svg>
                                        </div>
                                    </div>
                                    <div style={{paddingLeft: "10px"}} className="dvvmmn3">
                                        <h6 className="kckh6">
                                            Step 3: Filling your details
                                        </h6>
                                        <h3 className="kckh3">Tell us more.</h3>
                                    </div>
                                </div>

                                <div className="c-div" style={{width: "80%", margin: "7.6% 0 0 18%"}}>
                                    <form action="" className="tchrcrtprlf" method="POST" id="tchrcrtprlf" noValidate="novalidate" onSubmit={handleSubmit}>
                                        <div className="w-100">
                                            <div className="kckh4" id="uiscs">
                                                <input id="scode" name="scode" autoComplete="off" type="text" className="mbl-inp" maxLength="10" required="" value={schoolCodeTeacherSignup} onBlur={(e) => onBlur(e)} onChange={e => { setSchoolCodeTeacherSignup(e.target.value); handleChange(e)}} />
                                                <span className="kckh4-spn" htmlFor="scode">School Code</span>
                                                <svg className="kckh4-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                    <g strokeWidth="2" fill="none" fillRule="evenodd" stroke="#9CA2B4" className="stroke">
                                                        <path d="M13,9.5 L19,9.5" id="Path-10"></path>
                                                        <path d="M13,13.5 L17,13.5" id="Path-10"></path>
                                                        <rect id="Rectangle" x="1" y="4" width="22" height="16" rx="3"></rect>
                                                        <circle id="Oval-5" cx="7.5" cy="11.5" r="2.5"></circle>
                                                    </g>
                                                </svg>
                                                <span className="kckh4-err-spn" style={{display: "none"}}>
                                                    <img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1639375615/Login%20Image/closearw234dsfoi2l.webp" alt="" width="16" height="16" />
                                                    <span className="err-txt">School code is required</span>
                                                </span>
                                            </div>
                                            <div className="kckh42" id="uiscs2">
                                                <input id="yourname" name="yourname" autoComplete="off" type="text" className="mbl-inp" maxLength="50" required="" value={teacherNameSignup} onBlur={(e) => onBlur2(e)} onChange={e => { setTeacherNamesignup(e.target.value); handleChange(e)}} />
                                                <span className="kckh4-spn" htmlFor="yourname">Name</span>
                                                <svg className="kckh4-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                    <g strokeWidth="2" fill="none" fillRule="evenodd" stroke="#9CA2B4" className="stroke">
                                                        <path d="M13,9.5 L19,9.5" id="Path-10"></path>
                                                        <path d="M13,13.5 L17,13.5" id="Path-10"></path>
                                                        <rect id="Rectangle" x="1" y="4" width="22" height="16" rx="3"></rect>
                                                        <circle id="Oval-5" cx="7.5" cy="11.5" r="2.5"></circle>
                                                    </g>
                                                </svg>
                                                <span className="kckh4-err-spn" style={{display: "none"}}>
                                                    <img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1639375615/Login%20Image/closearw234dsfoi2l.webp" alt="" width="16" height="16" />
                                                    <span className="err-txt">Name is required</span>
                                                </span>
                                            </div>
                                            <div className="kckh43" id="uiscs3">
                                                <div className="custom-selectt">
                                                    <select id="gender" className="mbl-inp cs-slct-fld slct-cstm1 pdl-30px" name="gendername" value={teacherGenderSignup} onBlur={(e) => onBlur3(e)} onChange={e => { setTeacherGendersignup(e.target.value); handleChange(e)}}>
                                                        <option value="0">Select Gender</option>
                                                        <option value="Male">Male</option>
                                                        <option value="Female">Female</option>
                                                        <option value="Other">Other</option>
                                                    </select>
                                                    <span className="kckh4-spn kckh4-spncstm cs-lft">Choose Gender</span>
                                                </div>
                                                <span className="kckh4-err-spn" style={{display: "none"}}>
                                                    <img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1639375615/Login%20Image/closearw234dsfoi2l.webp" alt="" width="16" height="16" />
                                                    <span className="err-txt">Gender is required</span>
                                                </span>
                                            </div>
                                            <div className="kckh44" id="uiscs4">
                                                <input id="mobile" name="mobile" autoComplete="off" type="text" className="mbl-inp" maxLength="15" required="" value={teacherMobileSignup} onBlur={(e) => onBlur4(e)} onChange={e => { setTeacherMobilesignup(e.target.value.trim()); handleChange(e)}} />
                                                <span className="kckh4-spn" htmlFor="mobile">Mobile</span>
                                                <svg className="kckh4-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                    <g strokeWidth="2" fill="none" fillRule="evenodd" stroke="#9CA2B4" className="stroke">
                                                        <path d="M13,9.5 L19,9.5" id="Path-10"></path>
                                                        <path d="M13,13.5 L17,13.5" id="Path-10"></path>
                                                        <rect id="Rectangle" x="1" y="4" width="22" height="16" rx="3"></rect>
                                                        <circle id="Oval-5" cx="7.5" cy="11.5" r="2.5"></circle>
                                                    </g>
                                                </svg>
                                                <span className="kckh4-err-spn" style={{display: "none"}}>
                                                    <img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1639375615/Login%20Image/closearw234dsfoi2l.webp" alt="" width="16" height="16" />
                                                    <span className="err-txt">Mobile is required</span>
                                                </span>
                                            </div>
                                        </div>

                                        <div className="form-group login-submit mb-0 dvvmmn4" style={{paddingTop: "38px"}}>
                                            <button id="nxt-btnnfnltchr" type="submit" className="kckh-btn verifybutton" disabled>
                                                <div id="nxt-btnn-loader" className="loadingio-spinner-rolling-rrc44sjio9" style={{display: "none"}}>
                                                    <div className="ldio-ravfkgmzeb">
                                                        <div className="lodrr"></div>
                                                    </div>
                                                </div>
                                                <span id="nxt-btnn-txt">Finish</span>
                                            </button>
                                        </div>
                                        <br/><br/><br/><br/><br/><br/>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="bck-btn-mbw">
                <Link title="Back" to="/u/signup" className="px-5 pyf-2 pp-pl-0 bck-btn cstmabtnsa">
                    <img src="../Images/left-long-arrow.svg" width="22" style={{verticalAlign: "bottom"}} /> <span className="bck-btn"> BACK </span>
                </Link>
            </div>
            </div>
        </div>
        
    </div>
}

// export default Details;
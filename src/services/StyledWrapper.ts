import styled from "styled-components";

interface LargeProps {
  large: boolean;
}
export const StyledWrapper = styled.div<LargeProps>`
  .template-container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    .notification-bar {
      position: fixed;
      top: 0;
      width: 100%;
      background: rgba(0, 0, 0, 0.15);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      .info-details {
        ul {
          list-style-type: none;
          padding-inline-start: 0;
          padding 2px 0;
          margin: 0;
          li {
            margin-right: 10px;
            margin-left: 10px;
            display: inline;
            font-size: 0.8rem;
            a {
              text-decoration: none;
            }
          }
        }
      }
    }
    .body-content {
      .col-xl-12{
        border-radius: 10px;
        ${(props) =>
          props.large &&
          `position: fixed;
          border-radius: 0;
        top: 28px;
        left: 0;`}
        box-shadow: 0 1rem 3rem rgba(0,0,0,.55)!important;
        background: rgba(0, 0, 0, 0.35);
        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);
        >.nav-container{
          border-bottom: rgba(225, 225, 225, 0.25) solid 0.7px;
          .col-3{
            div{
              margin-top: 15px;
              height: 12px;
              width: 12px;
              border-radius: 50%;
              margin-right: 5px;
              cursor: pointer;
            }
            .yellow{
              background: yellow;
            }
            .red{
              background: red;
            }
            .green{
              background: green;
            }
          }
          .col-3-img{
            display: flex;
            justify-content: center;
            align-items: center;
            img{
              width: 30px;
              height: 30px;
              margin-right: 5px;
              border-radius: 50%;
            }
          }
          .col{
            padding-left: 0 !important;
            div{
              width: 100px;
              padding-top: 15px;
              padding-bottom: 15px;
              a {
                text-decoration: none;
                display: block;
                font-size: 0.8rem;
                text-align: center!important;
                color: rgb(255, 255, 255, 0.25);
              }
            }
            .active{
              border-bottom: rgba(225, 225, 225, 0.85) solid 2px;
              a{
                color: rgb(255, 255, 255, 0.75);
                font-weight: bold;
              }
            }
          }
        }
        .bottom-content{
          h1{
            font-family: 'Space Grotesk', sans-serif;
                font-weight: bold;
          }
          p{
            color:  rgba(225, 225, 225, 0.6);
          }
          .col-lg-3{
            ${(props) => (props.large ? `height: 95vh;` : "height: 70vh;")}
            overflow-y: auto;
            ::-webkit-scrollbar-track {
              -webkit-box-shadow: inset 0 0 6px rgba(225, 225, 225, 0.3);
              background-color: inherit;
            }

            ::-webkit-scrollbar {
              width: 6px;
              background-color: inherit;
            }

            ::-webkit-scrollbar-thumb {
              background-color:  rgba(225, 225, 225, 0.3);
              border-radius: 10px;
            }
            .side-link-container{
              p{
                color: rgb(255, 255, 255, 0.25);
                font-size: 0.8rem;
                margin-bottom: 4px;
              }
              >div{
                p{
                  color: #ffffff;
                }
                :hover{
                  background: rgba(0, 0, 0, 0.35);
                }
              }
              .active{
                background: rgba(0, 0, 0, 0.35);
              }
            }
          }
          .col-lg-9{
            padding-bottom: 150px;
            border-bottom-right-radius: 10px;
            &.flex-ct{
              height: 54vh;
            }
            background: rgba(0, 0, 0, 0.35);
            height: 60vh;
             ${(props) => (props.large ? `height: 95vh;` : "height: 70vh;")}
            overflow-y: auto;
            ::-webkit-scrollbar-track {
              -webkit-box-shadow: inset 0 0 6px rgba(225, 225, 225, 0.3);
              background-color: inherit;
            }

            ::-webkit-scrollbar {
              width: 6px;
              background-color: inherit;
            }

            ::-webkit-scrollbar-thumb {
              background-color:  rgba(225, 225, 225, 0.3);
              border-radius: 10px;
            }
          }
          .big-avatar{
            width: 100%;
          }
          .about{
            h1{
            }
            p{
              color:  rgba(225, 225, 225, 0.6);
              font-size: 18px;
              font-family: 'Mulish', sans-serif;
            }
          }
          .project-text{
            font-family: 'Space Grotesk', sans-serif;
            font-size: 36px;
          }
          .projects{  
            margin-top: 70px;
            margin-bottom: 70px;
            img{
              margin-top: 30px;
              width: 70%;
              transition: transform .6s;
              :hover{
                transform: scale(1.5);
              }
            }
            .single-project{
              background-color:  rgba(225, 225, 225, 0.05);
              border-radius: 10px;
              p{
                font-family: 'Mulish', sans-serif;
                font-size: 16px;
              }
            }
          }
          .tools{
            img{
              width: 100px ;
            }
          }
        }
      }
    }
    .footer{
      height: 70px;
      .footer-content{
        background: rgba(225, 225, 225, 0.25);
        backdrop-filter: blur(4px);
        border-radius: 15px;
        -webkit-backdrop-filter: blur(4px);
        padding-left: -15px !important;
        img{
          border-radius: 10px;
          height: 50px;
          width: 50px;
          transition: all .2s;
          margin-right:5px !important;
          margin-left:5px !important;
          :hover{
            transform: scale(1.3);
          }
        }
      }
    }
  }
  .contact {
    margin-top: 100px;
    margin-bottom: 100px;
    .row {
      .col-md-6 {
        h2 {
          font-family: Space Grotesk;
          font-style: normal;
          font-weight: bold;
          font-size: 50px;
          line-height: 64px;
          /* identical to box height */

          color: #ffffff;
          margin-bottom: 50px;
        }
        p {
          font-style: normal;
          font-weight: normal;
          font-size: 15px;
          font-family: 'Mulish', sans-serif;
          line-height: 30px;
          /* or 200% */

          color: rgba(255, 255, 255, 0.71);
        }
        div {
          margin-top: 30px;
          a {
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            font-family: 'Mulish', sans-serif;
            line-height: 24px;
            /* identical to box height */

            color: rgba(255, 255, 255, 0.71);

            span {
              margin-right: 15px;
            }
          }
        }
        form {
          margin-top: 20px;
          margin-bottom: 50px;
          .text-input {
            margin-bottom: 20px;
            background: rgba(9, 9, 9, 0.27);
            border: 1px solid rgba(63, 63, 63, 0.78);
            box-sizing: border-box;
            border-radius: 15px;
            padding: 14px;
            padding-left: 27px;
            width: 100%;
            font-style: normal;
            font-weight: 300;
            font-size: 13px;
            line-height: 30px;
            /* identical to box height, or 231% */
            outline: none;
            color: rgba(255, 255, 255, 0.6);
            :focus{
            background: rgba(9, 9, 9, 0.27);
            }
          }
          textarea {
            width: 100%;
            height: 150px;
            margin-bottom: 20px;
            background: rgba(9, 9, 9, 0.27);
            border: 1px solid rgba(63, 63, 63, 0.78);
            box-sizing: border-box;
            border-radius: 15px;
            padding: 14px;
            padding-left: 27px;
            width: 100%;
            font-style: normal;
            font-weight: 300;
            font-size: 13px;
            line-height: 30px;
            /* identical to box height, or 231% */
            outline: none;
            color: rgba(255, 255, 255, 0.6);
            margin-bottom: 30px;
          }
        }
      }
    }
  }
  @media (max-width: 988px) {
    .template-container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    .notification-bar {
      position: fixed;
      top: 0;
      width: 100%;
      background: rgba(0, 0, 0, 0.15);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      .info-details {
        ul {
          list-style-type: none;
          padding-inline-start: 0;
          padding 2px 0;
          margin: 0;
          li {
            margin-right: 10px;
            margin-left: 10px;
            display: inline;
            font-size: 0.8rem;
            a {
              text-decoration: none;
            }
          }
        }
      }
    }
    .body-content {
      .col-xl-12{
        position: fixed;
        top: 28px;
        left: 0;
        box-shadow: 0 1rem 3rem rgba(0,0,0,.55)!important;
        border-radius: 0px;
        background: rgba(0, 0, 0, 0.35);
        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);
        >.nav-container{
          border-bottom: rgba(225, 225, 225, 0.25) solid 0.7px;
          justify-content: space-between;
          .col-3-none{
            display: none !important;
          }
          .col-3{
            div{
              margin-top: 15px;
              height: 12px;
              width: 12px;
              border-radius: 50%;
              margin-right: 5px;
              cursor: pointer;
            }
            .yellow{
              background: yellow;
            }
            .red{
              background: red;
            }
            .green{
              background: green;
            }
          }
          .col-3-img{
            display: flex;
            justify-content: center;
            align-items: center;
            img{
              width: 30px;
              height: 30px;
              margin-right: 5px;
              border-radius: 50%;
            }
          }
          .col{
            padding-left: 0 !important;
            div{
              width: 100px;
              padding-top: 15px;
              padding-bottom: 15px;
              a {
                text-decoration: none;
                display: block;
                font-size: 0.8rem;
                text-align: center!important;
                color: rgb(255, 255, 255, 0.25);
              }
            }
            .active{
              border-bottom: rgba(225, 225, 225, 0.85) solid 2px;
              a{
                color: rgb(255, 255, 255, 0.75);
              }
            }
          }
        }
        .bottom-content{
          h1{
            font-family: 'Space Grotesk', sans-serif;
                font-weight: bold;
          }
          p{
            color:  rgba(225, 225, 225, 0.6);
          }
          .col-lg-3{
            display: none;
            height: 95vh;
            overflow-y: auto;
            ::-webkit-scrollbar-track {
              -webkit-box-shadow: inset 0 0 6px rgba(225, 225, 225, 0.3);
              background-color: inherit;
            }

            ::-webkit-scrollbar {
              width: 6px;
              background-color: inherit;
            }

            ::-webkit-scrollbar-thumb {
              background-color:  rgba(225, 225, 225, 0.3);
              border-radius: 10px;
            }
            .side-link-container{
              p{
                color: rgb(255, 255, 255, 0.25);
                font-size: 0.8rem;
                margin-bottom: 4px;
              }
              >div{
                p{
                  color: #ffffff;
                }
                :hover{
                  background: rgba(0, 0, 0, 0.35);
                }
              }
              .active{
                background: rgba(0, 0, 0, 0.35);
              }
            }
          }
          .col-lg-9{
            padding-bottom: 150px;
            border-bottom-right-radius: 10px;
            &.flex-ct{
              height: 54vh;
            }
            background: rgba(0, 0, 0, 0.35);
            height: 60vh;
            height: 95vh;
            overflow-y: auto;
            ::-webkit-scrollbar-track {
              -webkit-box-shadow: inset 0 0 6px rgba(225, 225, 225, 0.3);
              background-color: inherit;
            }

            ::-webkit-scrollbar {
              width: 6px;
              background-color: inherit;
            }

            ::-webkit-scrollbar-thumb {
              background-color:  rgba(225, 225, 225, 0.3);
              border-radius: 10px;
            }
          }
          .big-avatar{
            width: 100%;
          }
          .about{
            h1{
              font-family: 'Space Grotesk', sans-serif;
                  font-weight: bold;
            }
            p{
              color:  rgba(225, 225, 225, 0.6);
              font-size: 18px;
              font-family: 'Mulish', sans-serif;
            }
          }
          .projects{  
            margin-top: 70px;
            margin-bottom: 70px;
            img{
              margin-top: 30px;
              width: 70%;
            }
            .single-project{
              background-color:  rgba(225, 225, 225, 0.05);
              border-radius: 10px;
              p{
                font-family: 'Mulish', sans-serif;
                font-size: 16px;
              }
            }
          }
          
        }
      }
    }
    .footer{
      height: 70px;
      .footer-content{
        background: rgba(225, 225, 225, 0.25);
        backdrop-filter: blur(4px);
        border-radius: 15px;
        -webkit-backdrop-filter: blur(4px);
        padding-left: -15px !important;
        img{
          border-radius: 10px;
          height: 50px;
          width: 50px;
          transition: all .2s;
          margin-right:5px !important;
          margin-left:5px !important;
          :hover{
            transform: scale(1.3);
          }
        }
      }
    }
  }
  }
  
  @media (max-width: 620px) {
    .body-content {
      .col-xl-12{
        .nav-container{
          flex-direction: column-reverse;
          align-items: center;
          .col-3-img{
            margin-top: 10px;
          }
        }
      }
    }
  }
`;

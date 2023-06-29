<template>
    <div>
        <nav class="nav">
            <div class="nav-child">
                <h3 class="nav__search-logo"><a href="">SHOPPI</a></h3>
                <div class="nav__search">
                    <div class="nav__search-search">
                        <input class="search__input" type="text" results=5 name=s placeholder="search...">
                        <button class="search__button"> <i class="fa-solid fa-magnifying-glass"></i></button>
                        <div class="search__cart"><a href=""><i class="fa-solid fa-cart-shopping"></i></a></div>
                    </div>
                </div>
                <div class="nav__list" :class="{ nav__list__active: isActive }">
                    <ul>
                        <li><a href="./login.vue">Trang Chủ </a> </li>
                        <li><a href="">Liên Hệ</a> </li>
                        <li><a href="">Đăng Kí</a> </li>
                        <li><a href="">Đăng Nhập</a> </li>

                    </ul>

                </div>
                <div class="nav__bars">
                    <div  :class="{ open__menu: isActive }" @click="onActive()"><i class="fa-solid fa-bars"></i></div>
                    <div class="close-menu" :class="{ close__menu__active: isActive}" @click="onActive()"><i
                            class="fa-solid fa-xmark"></i></div>
                </div>
            </div>
        </nav>




    </div>
</template>

<script >
export default {
    data() {
        return {
            isActive: false,
        }
    }
    ,
    methods: {
        onActive() {
            this.isActive = !this.isActive

        },
    }
}
</script>

<style lang="scss" scoped>
// import  mixin
@import '../assets/style.scss';

* {
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style-type: none;
    box-sizing: border-box;
}


.nav .nav-child {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    // max-width: 1220px;
    background-color: #ffffff;
    height: 50px;
    position: fixed;
    top: 0;
    z-index: 100;

    .nav__search-logo a {
        color: #e31b3c;
        text-decoration: none;
    }

    .nav__search {
        .nav__search-search {
            .search__input {
                margin: 0 4px;
                border-radius: 4px;
                padding: 3px 0;
                width: 300px;
                border: 1px solid #8fc3ed;
                padding-right: 45px;
                padding-left: 10px;

                &:focus {
                    outline: none;
                    border: 1px solid #5AB0DB;
                    box-shadow: 0px 0px 5px #61C5FA;
                }
            }

            .search__button {
                margin-left: -46px;
                background-color: red;
                border: none;
                width: 34px;
                border-radius: 10%;

                .fa-solid {
                    color: #fff;
                    font-size: 1rem;
                }
            }

            .search__cart {
                display: inline-block;
                padding: 5px;
                margin-left: 2rem;
                position: relative;
                top: 4px;

                &::after {
                    display: flex;
                    position: absolute;
                    content: "1";
                    top: -5px;
                    right: -7px;
                    border: 1px solid #c54e4e;
                    border-radius: 50%;
                    width: 18px;
                    height: 18px;
                    justify-content: center;
                    align-items: center;
                    color: red;
                    background-color: #fff;
                }

                .fa-cart-shopping {
                    color: red;
                    font-size: 1.4rem;
                }
            }
        }
    }

    .nav__list {


        ul li {
            display: inline-block;
            // list-style-type: none;
        }

        li a {
            display: block;
            text-decoration: none;
            color: red;
            font-size: 1rem;
            font-weight: 400;
            border-radius: 7px;
            padding: 0 5px;
            margin: 10px;
            border-bottom: 1px solid #fff;
            border-top: 1px solid #fff;




            &:hover {
                color: #7abfc0;
                border-bottom: 1px solid #7abfc0;
                border-top: 1px solid #7abfc0;
            }
        }
    }

    .nav__bars {
        position: relative;
        font-size: 1.3rem;
        // z-index: 100;
        color: red;
        cursor: pointer;


        // @include border();
        // background-color: red;

    }
}

// mobile
@media screen and (max-width: 46.1875rem) {
    .nav .nav-child {
        .nav__search-logo a {
            font-size: 1.2rem;
        }

        .nav__search {
            .nav__search-search {
                .search__input {
                    max-width: 11.25rem;
                    margin: 0 0.0625rem;
                }
                .search__cart {
                    margin-left: .8rem;

                }
            }
        }

        .nav__list {

            width: 12.5rem;
            height: 50%;
            position: fixed;
            top: 0;
            left: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            background-color: #333;
            transition: transform .4s ease-in-out;
            border-bottom-left-radius: 1rem;
            z-index: 101;
            ul {
                display: block;
                // margin-top: 1.25rem;
            }

            ul li {
                display: block;
                margin: .9rem 0 ;
            }

            li a {
                width: fit-content;


            }
        }

        .nav__list__active {
            transform: translateX(-100%);
            z-index: 102;
            
        }

        .nav__bars {
            
            .open__menu {
                //Thành phần sẽ không được nhìn thấy.
                visibility: hidden;
                // transform: scale(0);
                
            }
            .close-menu {
                color: red;
                position: fixed;
                top: 0.6rem;
                right: -3rem;
                transition: transform .4s ease-in-out;
                z-index: 201;
            }

            .close__menu__active {
                transform: translateX(-13rem);
            }
        }

        .nav__bars__active {
            transform: translateX(-100%);
        }
    }

}

@media screen and (min-width: 46.1875rem) and (max-width: 63.9375rem) {
    .nav .nav-child {
        justify-content: space-between;
        .nav__search {
            .nav__search-search {
                .search__input {
                    max-width: 11.25rem;
                }
            }
        }

        .nav__list {
            li a {
                width: fit-content;
                font-size: 1rem;
            }
        }
        .nav__bars {
            display: none;
        }

    }
}

@media screen and (min-width: 1024px) {
    .nav .nav-child {
        .nav__bars {
            display: none;
        }
    }
}</style>
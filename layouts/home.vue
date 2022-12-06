<template>
    <div class="bg-green-400">
        <div class="flex 2xl:px-16 xl:px-16 lg:px-16 md:px-10 sm:px-10 4xl:px-6 5xl:px-6 xs:px-6 justify-between">
            <div>ورود/ثبت نام</div>
            <div>دفترمرکزی:
                041-33355577 - تبریزی</div>
        </div>
    </div>
    <div>
        <div class="flex mt-5 2xl:px-16 xl:px-16 lg:px-16 md:px-10 sm:px-10 4xl:px-6 5xl:px-6 xs:px-6 justify-between">
            <div class="flex items-center justify-center">

                <nuxt-link to="/cart">
                    <img src="@/assets/img/sabed kharid.png" alt="">
                </nuxt-link>
                <div>سبدخرید</div>
            </div>
            <div>
                <input style="direction:rtl" type="text"
                    class="2xl:w-96 xl:w-96 lg:w-96 md:w-96 sm:w-80 4xl:w-64 5xl:w-64 xs:w-64 input py-6 border border-gray-300"
                    placeholder="جستجو">
            </div>
            <div>
                <img src="@/assets/img/asset 0.png" alt="">
            </div>
        </div>
    </div>
    <div class="drawer mt-5 drawer-end">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
            <!-- Navbar -->
            <div
                class="w-full 2xl:px-16 xl:px-16 lg:px-16 md:px-10 sm:px-10 4xl:px-6 5xl:px-6 xs:px-6 navbar bg-base-300">
                <div class="flex-none lg:hidden">
                    <label for="my-drawer-3" class="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            class="inline-block w-6 h-6 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </label>
                </div>

                <div class="flex-1 hidden 2xl:block xl:block lg:block px-2 mx-2">
                    <ul style="direction:rtl" class="menu menu-horizontal">
                        <!-- Navbar menu content here -->
                        <li><a>Navbar Item 1</a></li>
                        <li><a>Navbar Item 2</a></li>
                    </ul>
                </div>
                <div class="flex-none ">

                </div>
            </div>
            <!-- Page content here -->
            <slot />
        </div>
        <div class="drawer-side">
            <label for="my-drawer-3" class="drawer-overlay"></label>
            <ul class="menu p-4 w-80 bg-base-100">
                <!-- Sidebar content here -->
                <li><a>Sidebar Item 1</a></li>
                <li><a>Sidebar Item 2</a></li>

            </ul>

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.drawer {
    height: 96vh;
}
</style>
<script lang="ts">
    import { goto } from "$app/navigation";
    import { auth } from "./firebase/firebase.app";
</script>

<div class="navbar fixed bg-white z-10">
    <!-- store logo -->
    <div class="flex-1 ml-5">
        <a href="/" class="btn btn-ghost text-2xl text-primary-content">STORE</a>
    </div>

    <!-- cart button -->
    <div class="flex-none mx-5">
        <a href="/cart">
            <div role="button" class="btn btn-ghost btn-circle">
                <div class="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    <span class="badge badge-sm indicator-item">8</span>
                </div>
            </div>
        </a>
    </div>

    <!-- profile button -->

    <div class="dropdown dropdown-bottom dropdown-end mr-5">
        <div tabindex="0" role="button" class="w-10 m-1">
            <img class="object-cover rounded-full"
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
        <ul class="dropdown-content z-[1] menu p-2 shadow rounded-box w-40">
            <li><a href="/">Item 1</a></li>
            {#if auth.currentUser}
                <li><button on:click={auth.signOut}>Sign Out</button></li>
            {:else}
                <li><button on:click={() => {goto("/"); }}>Sign In</button></li>
            {/if}
        </ul>
    </div>
</div>
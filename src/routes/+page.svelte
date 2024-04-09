<script lang="ts">
    import Item from "$lib/Item.svelte";
    import { onMount } from "svelte";
    import type { ActionData } from './$types';
    import { auth } from "$lib/firebase/firebase.app";
	
    export let form: ActionData;

    let modal: HTMLDialogElement;
    let signInOrSignUp: boolean;
    let userAuthMethod: string;

    onMount(() => {
        if (!auth.currentUser) {
            modal.showModal();
            signInOrSignUp = true;
        }
         else {
            signInOrSignUp = false;
         }
    });

    let items = [
        {
            id: "item 1",
            cost: 30.99
        },
        {
            id: "item 2",
            cost: 20.49
        },
        {
            id: "item 3",
            cost: 32.49
        },
        {
            id: "item 4",
            cost: 25.99
        },
        {
            id: "item 5",
            cost: 28.49
        }
    ]
</script>

<div class="flex flex-col items-center">
    {#each items as item}
        <Item {item}/>
    {/each}
</div>

<dialog id="my_modal_3" class="modal" bind:this={modal}>
    <div class="modal-box">
        <form method="dialog">
            <button class="btn btn-sm absolute right-2 top-2">✕</button>
        </form>

        {#if signInOrSignUp}
            <button class="btn btn-lg" on:click={() => { signInOrSignUp = false; userAuthMethod = "signin" }}>Sign In</button>
            <button class="btn btn-lg" on:click={() => { signInOrSignUp = false; userAuthMethod = "signup" }}>Sign Up</button>
        {:else}
            <form method="POST" action={`?/${userAuthMethod}`}>
                {#if form?.missing}<p class="error">The email field is required</p>{/if}
                <label>
                    Email
                    <input name="email" type="email">
                </label>
                <label>
                    Password
                    <input name="password" type="password">
                </label>
    
                <button class="btn btn-lg">{userAuthMethod}</button>
            </form>
        {/if}
    </div>
</dialog>
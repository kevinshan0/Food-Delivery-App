<script>
    import Item from "$lib/Item.svelte";

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
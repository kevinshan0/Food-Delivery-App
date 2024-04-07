<script lang="ts">
    export let item: {id: string, cost: number};
</script>

<a href={`/${item.id.replaceAll(" ", "-")}`} class="my-12">
    <div class="card flex flex-col items-center">
        <figure>
            <img src={`${item.id.replaceAll(" ", "-")}.jpg`} alt="Shoes"/>
        </figure>
        <h1 class="text-primary-content text-2xl pt-3">{item.id}</h1>
        <h3 class="pt-3">{`$${item.cost}`}</h3>
    </div>
</a>
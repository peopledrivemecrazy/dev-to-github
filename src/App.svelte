<script>
	import dayjs from 'dayjs'
	let username = "shriji";
	let articles;
	let list
	async function fetchData(x) {
		const res = await fetch(`https://dev.to/api/articles?username=${x}&per_page=5`);
		articles = await res.json();

		if (res.ok) {
			console.log(articles)
			list = () => {
				let articleList = '';
				articles.forEach(element => {
					let date = dayjs(element.published_timestamp).format("MMM DD YYYY")
					articleList += `* ${date} [${element.title}](${element.url}) \n`
					console.log(articleList)
				});
				return articleList
			};
			return list;
		} else {
			throw new Error(articles);
		}
	}
	let data;
	async function fetchProfile(x) {
		const res = await fetch(`https://dev.to/api/users/by_username?url=${x}`);
		data = await res.json();

		if (res.ok) {
			console.log(data)
			return data;
		} else {
			throw new Error(data);
		}
	}

	function handleClick() {
		console.log(username)
		fetchProfile(username)
		fetchData(username)
	}
</script>
<style>
	textarea {
		width: 100%;
		min-height: 600px
	}

	code {
		color: crimson
	}
</style>

<input type="text" bind:value={username}>
<button on:click={handleClick}>Fetch Data</button>

{#if data} 
<p class="py-2">Copy this to your github profile's <code>README.md</code></p>
<textarea name="md" id="mdData" cols="30"># {data.name}
{data.summary}
<hr>

### 📝 Latest articles from [dev.to](https://dev.to/shriji) 	
{list()}

</textarea>
{/if}
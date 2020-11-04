<script>
  import dayjs from "dayjs";

  const profileURL = "https://dev.to/api/users/by_username?url=";
  const articlesURL = "https://dev.to/api/articles?per_page=5&username=";
  let username = "";
  let data = false;
  let taData = "";
  let articleList = "";
  let github = "";
  let stats = "";

  async function fetchInfo(x) {
    const res = await fetch(`${profileURL}${x}`)
      .then(async (data) => {
        let d = await data.json();
        github = d.github_username;
        if (github) {
          taData = `# ${d.name}\n${d.summary}\n<hr>\n\n### 📝 Latest articles from [dev.to](https://dev.to/${d.username})\n\n`;
        }
        return fetch(`${articlesURL}${x}`);
      })
      .then(await fetch(`${articlesURL}${x}`))
      .then(async (article) => {
        let k = await article.json();
        k.forEach((element) => {
          let date = dayjs(element.published_timestamp).format("MMM DD YYYY");
          articleList += `* ${date} [${element.title}](${element.url}) \n`;
        });

        if (github) {
          stats = `<p align="center">\n\n<img src="https://visitor-badge.laobi.icu/badge?page_id=${github}.${github}" />\n\n<img src="https://img.shields.io/badge/dynamic/json?color=brightgreen&label=followers&query=followers&url=https://api.github.com/users/${github}" />\n\n</p>`;
        }
        data = true;
      });
  }

  function handleClick(e) {
    e.preventDefault();
    taData = "";
    articleList = "";
    github = "";
    stats = "";
    let input = document.querySelector("#username");
    input.checkValidity();
    input.reportValidity();
    if (input.checkValidity()) {
      fetchInfo(username.toLowerCase());
    }
  }

  function copy() {
    var copyText = document.querySelector("#mdData");
    copyText.select();
    document.execCommand("copy");
  }
</script>

<style>
  textarea {
    width: 100%;
    min-height: 400px;
  }

  code {
    color: crimson;
  }

  input {
    width: 15em;
  }
</style>

<main>
  <form>
    <label for="username" />
    <input
      type="text"
      bind:value={username}
      id="username"
      placeholder="dev.to username or type ben"
      required
      on:change={() => (data = false)} />

    <button on:click={handleClick} type="submit">Fetch Data</button>
  </form>

  {#if data}
    <p class="py-2">
      Copy this to your github profile's
      <code>README.md</code>
    </p>
    <textarea
      name="md"
      id="mdData">{taData ? taData : `incomplete profile </3`}{articleList}{stats}
    </textarea>
    <button on:click={copy}><svg
        title="Copy to clipboard"
        class="octicon octicon-clippy"
        viewBox="0 0 14 16"
        version="1.1"
        width="14"
        height="16"
        aria-hidden="true">
        <path
          fill-rule="evenodd"
          d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z" />
      </svg>
      Copy</button>
  {/if}
</main>
<footer class="text-center">
  <span>from</span>
  <a href="https://anoram.com">Anoram</a>
</footer>

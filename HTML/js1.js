<input placeholder="type into me!" class="input-to-copy"/>
<p class="p-to-copy-to">nothing has happened yey</p>
<script>
const input=document.querySelector(',input-to-copy');
const paragraph=document.querySelector('.p-to-copy-to');
input.addEventListener("keyup",function()){
    paragraph.innerText=input.value;
});
</script>

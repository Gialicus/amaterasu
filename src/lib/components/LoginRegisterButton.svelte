<script lang="ts">
	export let selected: string = 'login';
</script>

<div class="flex-end join my-3 flex">
	<a
		href="./login"
		class="btn btn-primary join-item rounded-l-full {selected === 'login'
			? 'shadow-neumorphic-in'
			: 'shadow-neumorphic-out'} basis-1/2">Login</a
	>
	<a
		href="./"
		class="btn btn-primary join-item rounded-r-full {selected === 'register'
			? 'shadow-neumorphic-in'
			: 'shadow-neumorphic-out'}  basis-1/2">Register</a
	>
</div>

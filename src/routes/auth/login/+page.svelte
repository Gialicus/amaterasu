<script lang="ts">
	import LoginRegisterButton from '$lib/components/LoginRegisterButton.svelte';
</script>

<section class="flex h-full">
	<div class="m-3 basis-1/2 rounded-lg bg-primary shadow-neumorphic-out"></div>
	<div class="flex basis-1/2 flex-col items-center">
		<div>
			<LoginRegisterButton></LoginRegisterButton>
		</div>
		<div class="flex grow flex-col items-center justify-center">
			<div class="card flex flex-col bg-primary shadow-neumorphic-out">
				<div class="card-title justify-center p-3 text-primary-content">Login</div>
				<form method="post" class="card-body flex flex-col items-center justify-center gap-4">
					<input
						type="email"
						name="email"
						placeholder="Email"
						class="rounded-lg bg-base-100 p-2 shadow-neumorphic-out"
					/>
					<input
						type="password"
						name="password"
						placeholder="Password"
						class="rounded-lg bg-base-100 p-2 shadow-neumorphic-out"
					/>
					<div class="card-actions py-3">
						<button
							type="submit"
							class="btn btn-primary rounded-lg text-primary-content shadow-neumorphic-out"
							>Login</button
						>
					</div>
				</form>
			</div>
		</div>
	</div>
</section>
